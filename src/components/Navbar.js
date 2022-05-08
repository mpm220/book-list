import React from "react"
import pic from "../images/Closed_Book_Icon.png"

export default function Navbar(){
    return(
        <nav className='navbar'> 
            <img src={pic} className="nav-logo" alt="book-icon"/>
            <span className="nav-title">Reading list.</span>
        </nav>
    )
}