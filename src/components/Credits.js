import axios from 'axios';
import React,{useState,useEffect,Fragment} from 'react';


function Credits(props) {
  
    const [credits,setCredits] = useState([]);
    const [description,setDescription] = useState("");
    const [amount,setAmount] = useState(0);
    const [today, setToday] = useState(new Date().toString());


    const fetchCredits = async () => {
        try {
        const response = await axios.get("https://moj-api.herokuapp.com/credits")
        setCredits(response.data)
        console.log(response)
        } catch (error) {
            console.error(error.message)
        }
       

    }

    const addDebits = () =>{
        const newCredits = [...credits]
        newCredits.unshift({description, amount, date: today })
        setCredits(newCredits);
       // setDescription("");
      //  setAmount(0);
      props.updateAccountBalance(amount, "credit");
    }

    useEffect(() => {
        fetchCredits();
    },[]);


  
  
  return <Fragment>


<h1>Credits</h1>
<h2>Account Balance : {props.accountBalance}</h2>


<input type="text" placeholder='description' onChange={e => setDescription(e.target.value)} />
<input type="text" placeholder='amount' onChange={e => setAmount(parseInt(e.target.value))} />
<button onClick={addDebits}>Add</button>



{
    credits.map(data => {
        return(
            <div key={data.id} className="card">
            <ul>
                <li><span>Description: </span> {data.description}</li>
                <li><span>Amount: </span> {data.amount}</li>
                <li><span>Date: </span> {data.date}</li>
            </ul>
            </div>
        )
    })
}


  </Fragment>;
}

export default Credits;
