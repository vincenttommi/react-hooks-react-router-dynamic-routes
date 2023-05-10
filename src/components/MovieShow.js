import React from 'react'
import { useParams } from  "react-router-dom";

const MovieShow = ({ movies}) => {

 // calling  useParams to access  the params from the url

 const  params = useParams();
 console.log(params);


  return (
     <div>
   
    
       {/*  and here we  access  the  movieId in params  to render 
       information about  the selected movie  */}
      <h3>{movies[params.movieId].title}</h3>



     </div>
  )
}

export default MovieShow