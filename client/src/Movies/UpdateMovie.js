import React, {useState, useEffect } from "react";
import axios from "axios";

const UpdateMovie = (props)=>{
    // console.log("UpdateComponent props:",props)
    const [editMovie,setEditMovie]=useState({
        id:"",
        title:"",
        director:"",
        metascore:"",
        stars:[]

    })

    
     

    

    const handleChange=event=>{
       setEditMovie({...editMovie, [event.target.name]:event.target.value}) 
    }
 return (
     <form>
         <input 
         type="text"
         placeholder="id"
         name="id"
         onChange={handleChange}
         />
         <input 
         type="text"
         placeholder="title"
         name="title"
         onChange={handleChange}
         />
         <input 
         type="text"
         placeholder="director"
         name="director"
         onChange={handleChange}
         />
         <input 
         type="text"
         placeholder="metascore"
         name="metascore"
         onChange={handleChange}
         />
         <input 
         type="text"
         placeholder="stars"
         name="stars"
         onChange={handleChange}
         />

         <button> Submit</button>
         


     </form>
 )
}

export default UpdateMovie;