import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import "../Styles/ViewProduct.css";

function ViewProduct(){
    let [video, setVideo]=useState([])
    let [force,setForce]=useState(0)

    let navigate= useNavigate()
    function editvideo(id) {
        navigate(`/adminhomepage/editItem/${id}`)
    }
    function deletevideo(id, name){
        axios.delete(`http://localhost:1000/Videos/${id}`)
        .then((res)=>{
          setForce(force +1)
          console.log(res);
            alert(`${name} has been deleted`);
        })
        .catch((err)=>{
            alert("Video not found");
        })
    }
    

    useEffect(()=>{
        axios.get("http://localhost:1000/Videos")
    .then((res)=>{
        console.log(res);
        setVideo(res.data);
    })
    .catch((rej)=>{
        console.log(rej);
    })
    },[force])
    return(
        <div className="display-video">
      {video.map((ele) => {
        return (
          <div className="homepage-display">
            <div className="videos">
              <iframe
                width="500"
                height="315"
                src={ele.address}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="about">
                <h3 className="v-name">{ele.name}</h3>
                <span>{ele.view} views</span> <br />
                <span>{ele.likes} Likes</span> <br />
                <p> 
                  <button className="like-btn1">
                    Like
                    {ele.like}
                  </button>
                  <button className="like-btn2">Views</button>
                </p>
                <span>{ele.desc}</span> <br />
                <button className="delete" onClick={()=> deletevideo(ele.id,ele.name)}>Delete</button>
                <button className="edit" onClick={() => editvideo(ele.id)}>Edit</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    )
}
export default ViewProduct;