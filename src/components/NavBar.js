import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';


function NavBar() {




  return <Fragment>

                <Link to="/" > Home </Link>
                <Link to="/login" > Login </Link>
                <Link to="/userprofile" > UserProfile </Link>
                <Link to="/debits" > Debits </Link>
                <Link to="/credits" > Credits </Link>


  </Fragment>;
}

export default NavBar;
