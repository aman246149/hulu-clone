import React from 'react'
import MovieCard from './MovieCard'
import './Row.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Row(props) {

   

    return (
       <div className="moviecardRow">
           <div className="card">
               <div className="image__container">
                   <LazyLoadImage src={props.image} alt="" 
                   effect="blur"
                   />
               </div>
               <div className="title">
                   <h5>{props.title}</h5>
               </div>
           </div>
         
           
          
       </div>
       
    )
}


export default Row
