import React from 'react'
import './Row.css'


function Row(props) {

   

    return (
       <div className="moviecardRow">
           <div className="card">
               <div className="image__container">
                   <img src={props.image} alt="" />
               </div>
               <div className="title">
                   <h5>BEST IMAGE IN THE WORLD</h5>
               </div>
           </div>
         
           
          
       </div>
       
    )
}


export default Row
