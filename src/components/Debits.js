import axios from 'axios';
import React,{useState,useEffect,Fragment} from 'react';


function Debits(props) {

    const [debits,setDebits] = useState([]);
    const [description,setDescription] = useState("");
    const [amount,setAmount] = useState(0);
    const [today, setToday] = useState(new Date().toString());


    const fetchDebits = async () => {
        try {
        const response = await axios.get("https://moj-api.herokuapp.com/debits")
        setDebits(response.data)
        console.log(response)
        } catch (error) {
            console.error(error.message)
        }
       

    }

    const addDebits = () =>{
        const newDebits = [...debits]
        newDebits.unshift({description, amount, date: today })
        setDebits(newDebits);
       // setDescription("");
      //  setAmount(0);
      props.updateAccountBalance(amount, "debit");
    }

    useEffect(() => {
        fetchDebits();
    },[]);


  return <Fragment>


<h1>Debits</h1>
<h2>Account Balance : {props.accountBalance}</h2>


<input type="text" placeholder='description' onChange={e => setDescription(e.target.value)} />
<input type="text" placeholder='amount' onChange={e => setAmount(parseInt(e.target.value))} />
<button onClick={addDebits}>Add</button>



{
    debits.map(data => {
        return(
            <ul key={data.id}>
                <li><span>Description: </span> {data.description}</li>
                <li><span>Amount: </span> {data.amount}</li>
                <li><span>Date: </span>Date: {data.date}</li>
            </ul>
        )
    })
}


  </Fragment>;
}

export default Debits;
