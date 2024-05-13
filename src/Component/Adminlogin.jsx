import { useState } from "react";
import "../Styles/Adminlogin.css"
import {Link, useNavigate} from "react-router-dom";

function Adminlogin (){
    let [name,setName] =useState('');
    let [password,setPassword]= useState('');

    let navigate=useNavigate();
    function checkAdmin(){
        if(name === "Prasun" && password === "1234"){
            alert("Login Succesfully");
            navigate("/adminhomepage")
        }
        else{
            alert("Invalid Credentials")
        }
    }
    return(
        <div className="admin">
             <h2>Admin Login</h2>
            <div className="user">
                <label htmlFor="">
                    UserName:
                </label>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="username" />
            </div>
            <div className="pass">
                <label htmlFor="">
                    Password:
                </label>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password"/>
            </div>
            <button onClick={checkAdmin}>Log In</button>
            <p>Are you New User? <Link to="/adminsignup">SignUp Here!</Link> </p>

        </div>
    )
}
export default Adminlogin;