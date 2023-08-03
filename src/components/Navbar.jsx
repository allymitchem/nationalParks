import React from "react"
import {NavLink} from "react-router-dom"
import {Home} from './'

const Navbar = () => {
    return (
        <div id ="navbar">
            <img id="navImage" src="https://res.cloudinary.com/fsa2/image/upload/v1690997495/portfolio%20site%20images/Project%20Images/hikerIcon_wjmumb.png" alt="icon"/>
           
            <NavLink id="homeLink" to="/">Home</NavLink>
        </div>
    )

    
}

export default Navbar;