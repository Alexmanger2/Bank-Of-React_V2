import React,{Fragment} from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
function Home(props) {
 
 
 
 
 
 return <Fragment>
       
        <h1>Bank Of React</h1>
        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9uLGU-WZ9FQU-hFIbocKwwMCdiMBdVZ-u9B0N54b2sUiBsybz8QX2pMJR3ahb8piezo&usqp=CAU"/>
        <br/>
        <Link to="/userProfile">User Profile</Link>
        <AccountBalance accountBalance = {props.accountBalance} />


  </Fragment>;
}

export default Home;
