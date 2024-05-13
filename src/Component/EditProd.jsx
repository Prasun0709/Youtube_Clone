import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../Styles/EditProduct.css";
import { useParams } from "react-router-dom";

function EditProduct(){
    let [name,setName]=useState("")
    let [desc,setDesc]=useState("")
    let [address,setAddress]=useState("")
    let [likes,setLikes]=useState("")
    let [view,setViews]=useState("")

    let data={name,desc,address,likes,view}
    let param = useParams()
    console.log(param.id);
    useEffect(() => {
        axios.get(`http://localhost:1010/Videos/${param.id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setAddress(res.data.address);
                setDesc(res.data.desc);
                setLikes(res.data.likes);
                setViews(res.data.view);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [param.id]);
    

    function editVideos(e){
        e.preventDefault();
       axios.put(`http://localhost:1010/Videos/${param.id}`,data)
        .then((res)=>{
            console.log(res);
            alert("Edited Successfully")
        })
        .catch((rej)=>{
            console.log(rej);
            alert("Could'nt Edited Video")
        })
    }
    return(
        <div className="EditProduct">
             <form onSubmit={editVideos} action="">
                <label htmlFor=""> Name :</label> <input required value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter the Name" />
                <label htmlFor="">Description :</label> <input required value={desc} onChange={(e)=>{setDesc(e.target.value)}} type="text" placeholder="Enter the Description" />
                <label htmlFor="">Address :</label> <input required value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder="Enter the Address" />
                <label htmlFor=""> Likes :</label> <input required value={likes} onChange={(e)=>{setLikes(e.target.value)}} type="number" />
                <label htmlFor="">Views :</label> <input required value={view} onChange={(e)=>{setViews(e.target.value)}} type="number" />
                <button className="btn btn-outline-success">Edit Product</button>
            </form>
        </div>
    )
}
export default EditProduct;