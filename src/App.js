import {useState,Fragment} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from "./components/Login";
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import Credits from './components/Credits';
import NavBar from './components/NavBar';


function App() {

const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })
const [accountBalance, setAccountBalance] = useState(14568.27)
 

const mockLogIn = (logInInfo) => {
  const newUser = {...currentUser}
  newUser.userName = logInInfo.userName
  setCurrentUser(newUser)
}

const updateAccountBalance = (amount, transType) => {
  if (transType === "debit") {
    setAccountBalance(accountBalance - amount);
  } else {
    setAccountBalance(accountBalance + amount);
  }
};



 return ( <Fragment>

    <BrowserRouter>
               <NavBar/>
        <Routes>


                <Route exact path="/" element={<Home accountBalance={accountBalance}/>} />
                <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}  />}/>
                <Route path="/login" element={<Login user={currentUser} mockLogIn={mockLogIn}/>}/>
                <Route path="/debits" element={<Debits updateAccountBalance={updateAccountBalance} accountBalance={accountBalance} />}/>
                <Route path="/credits" element={<Credits updateAccountBalance={updateAccountBalance} accountBalance={accountBalance} />}/>

        </Routes>
    
    </BrowserRouter>
          
  </Fragment>   
  );
}

export default App;
