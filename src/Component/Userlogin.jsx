import "../Styles/Userlogin.css"
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
function Userlogin (){
    let [name,setName] =useState('');
    let [password,setPassword]= useState('');

    // let navigate=useNavigate();
    function checkUser(){
        if(name === "Prasun" && password === "1234"){
            alert("Login Succesfully");
        }
        else{
            alert("Invalid Credentials")
        }
    }
    return(
        <div className="Userlogin">
           <form action="">
             <label htmlFor="">
                    UserName:
             </label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="username" />
                <label htmlFor="">
                    Password:
                </label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password" />
                <button onClick={checkUser}>Log In</button>
                <p>Are you New User? <Link to="/usersignup">SignUp Here!</Link> </p>
           </form>
        </div>
    )
}
export default Userlogin;