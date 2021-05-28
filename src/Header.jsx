import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="container"> 
           <header >
                
                    <div className="left-part">
                    <i class="fal fa-home"></i>
                    <i class="fab fa-google"></i>
                    <i class="fal fa-hdd"></i>
                    <i class="far fa-search"></i>
                    <i class="fal fa-user"></i>
                    </div>
                    <div className="right-part">HULU</div>
                
           </header>
           <main>

                <div className="movie-list">
                    <h5>Trending</h5>
                    <h5>TopRated</h5>
                    <h5>Action</h5>
                    <h5>Comedy</h5>
                    <h5>Horror</h5>
                    <h5>Romance</h5>
                    <h5>Mystery</h5>
                    <h5>ScFi</h5>
                    <h5>Western</h5>
                    <h5>Indian</h5>
                    <h5>Anime</h5>
                    <h5>Animation</h5>
                    <h5>TvShows</h5>
                </div>

                <div className="movieContainer">
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1621568491751-ae830d4b7277?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
                    </div>

                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1621568491751-ae830d4b7277?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
                    </div>

                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1621568491751-ae830d4b7277?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
                    </div>
                </div>
            
           </main>
           <footer>

           </footer>
        </div>
    )
}

export default Header
