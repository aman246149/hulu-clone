import React, { useEffect, useState } from 'react'
import './MovieCard.css'
import Axios from './Axios'
import Request from './Requests'

function MovieCard() {

    // const[movies,setMovies]=useState([]);
    // const base_url="https://image.tmdb.org/t/p/original/"

    // useEffect(()=>{
    //     async function fetchData(){
    //         const request=await Axios.get(Request.fetchTrending);
    //         setMovies(request.data.results);
    //         return request;
    //     }

    //     fetchData();

    // },[]);

    return (
        <div className="moviecard row__container">
           
         <section className="cards">
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1622071232460-7625da1a2098?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1621972659891-e605ca25c6b2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1621972659891-e605ca25c6b2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1621972659891-e605ca25c6b2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1621972659891-e605ca25c6b2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1621972659891-e605ca25c6b2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1621972659891-e605ca25c6b2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
             <div className="card">
                 <div className="card__image-container">
                    <img src="https://images.unsplash.com/photo-1621972659891-e605ca25c6b2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="images"  />
                 </div>
                 <div className="card__conternt">
                 <p className="card__title text--medium">
                     Here's the title of an Awesome Course
                 </p>
                    <div className="card__info">
                        <p className="text--medium">30 min</p>
                        <p className="card__price text--medium">
                            Free
                        </p>
                    </div>
                 </div>
             </div>
         </section>
         
       
         
     
         
       
         
      
         
        </div>
    )
}


export default MovieCard
