import { useState } from "react";
import "../Styles/UserSignup.css";
import axios from 'axios';
import { Route } from "react-router-dom";

function UserSignup(){
    let [name,setName]= useState("")
    let [email,setEmail]= useState("")
    let [phone,setPhone]= useState("")
    let [password,setPassword]= useState("")

    let info={name,email,phone,password}
function addUser(e){
    e.preventDefault();
    axios.post("http://localhost:1010/Users",info)
     .then((res)=>{
        alert("SingedUp Succesfully")
    })
    .catch((err)=>{
        alert("Invalid Credentials")
    })
}
return(
    <div className="UserSignup">
        <form  action="">
          
            <legend>User SignUp Form</legend>
           <label htmlFor=""> Name :</label>
            <input required value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter the Name"/>
            <label htmlFor="">Phone :</label>
            <input required value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" pattern="[0-9],{10}" placeholder="Enter the Phone Number" />
            <label htmlFor="">Email :</label>
            <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter the Email"/>
            <label htmlFor="">Password :</label>
            <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter the Password"/>
            <button onClick={addUser}>SignUp</button>
           
        </form>
    </div>
)
}
export default UserSignup;