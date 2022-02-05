import React,{Fragment,useState} from 'react';
import { Navigate } from 'react-router-dom';


function Login(props) {
 
    const [user, setUser] = useState({ userName: "", password: "" })
    const [redirect, setRedirect] = useState(false)
  
  
    const handleChange = (e) => {
        console.log(e.target.name)
      const updatedUser = {...user}
      const inputField = e.target.name
      const inputValue = e.target.value
      updatedUser[inputField] = inputValue
  // updatedUser.userName = inputValue
      setUser(updatedUser)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.mockLogIn(user)
      setRedirect(true)
    }
  
      if (redirect) {
        return (<Navigate to="/userProfile"/>)
      }


 
 return <Fragment>

<form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={handleChange} value={user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>

  </Fragment>;
}

export default Login;
