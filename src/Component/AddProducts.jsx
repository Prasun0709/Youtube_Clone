import React, { useState } from "react";
import "../Styles/AddProducts.css";
import axios from "axios";
function AddProducts(){

    let [name,setName]=useState("")
    let [desc,setDesc]=useState("")
    let [address,setAddress]=useState("")
    let [likes,setLikes]=useState("")
    let [view,setViews]=useState("")

    let data={name,desc,address,likes,view}

    function addVideos(e){
        e.preventDefault();
        axios.post("http://localhost:1000/Videos",data)
        .then((res)=>{
            console.log(res);
            alert("Uploaded Successfully")
        })
        .catch((rej)=>{
            console.log(rej);
            alert("Could'nt Upload Video")
        })
    }
    return(
        <div className="AddProducts">
            <form onSubmit={addVideos} action="">
                <label htmlFor=""> Name :</label> <input required value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter the Name" />
                <label htmlFor="">Description :</label> <input required value={desc} onChange={(e)=>{setDesc(e.target.value)}} type="text" placeholder="Enter the Description" />
                <label htmlFor="">Address :</label> <input required value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder="Enter the Address" />
                <label htmlFor=""> Likes :</label> <input required value={likes} onChange={(e)=>{setLikes(e.target.value)}} type="number" />
                <label htmlFor="">Views :</label> <input required value={view} onChange={(e)=>{setViews(e.target.value)}} type="number" />
                <button className="btn btn-outline-success">  Upload</button>
            </form>
        </div>
    )
}
export default AddProducts;