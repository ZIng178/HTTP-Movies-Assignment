import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateMovie = (props )=> {
  // console.log("UpdateComponent props:",props)
  const [editMovie, setEditMovie] = useState({
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
  });
  
  // axios.get 
  useEffect(()=>{
      axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res=> setEditMovie(res.data))
      .catch(err=>console.log(err))
  },[])
  
const handleSubmit =event=>{
    event.preventDefault();
    axios.put(`http://localhost:5000/api/movies/${editMovie.id}`,editMovie )
    .then(res=>{setEditMovie(res.data) 
    
    props.history.push("/")
     } )
    
}





  //handleSubmit for axios.put
 

  const handleChange = event => {
    setEditMovie({ ...editMovie, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="id" name="id" onChange={handleChange} value={editMovie.id}/>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={editMovie.title}
      />
      <input
        type="text"
        placeholder="director"
        name="director"
        onChange={handleChange}
        value={editMovie.director}
      />
      <input
        type="text"
        placeholder="metascore"
        name="metascore"
        onChange={handleChange}
        value={editMovie.metascore}
      />
      <input
        type="text"
        placeholder="stars"
        name="stars"
        onChange={handleChange}
        value={editMovie.stars}
      />

      <button type="submit"> Submit</button>
    </form>
  );
};

export default UpdateMovie;
