import React from 'react'
import './TopBar.css'

function TopBar() {
    return (
        <div className="topbar">
                  <div className="icons__container">
                  <i class="fal fa-home icon1"></i>
                    <i class="fab fa-google icon2"></i>
                    <i class="fal fa-hdd icon3"></i>
                    <i class="far fa-search icon4"></i>
                    <i class="fal fa-user icon5"></i>
                 <div className="bname">Hulu</div> 
                  </div>
        </div>
    )
}


export default TopBar
