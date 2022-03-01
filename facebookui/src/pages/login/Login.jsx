import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../apicalls";
import "./login.css";



export default function Login() {
  const email = useRef()
  const password = useRef()
  const {user,isFetching,error,dispatch}=useContext(AuthContext)
  
  const handleclick = (e)=>{
   
    e.preventDefault()
    loginCall({email:email.current.value,password:password.current.value},dispatch)
  }
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you .
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleclick}>
            <input placeholder="Email" type="email" className="loginInput"  ref ={email}/>
            <input placeholder="Password" password ="password" className="loginInput" ref={password} />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
