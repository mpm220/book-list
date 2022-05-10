import React from "react"
import pic from "../images/Closed_Book_Icon.png"
import SearchBar from "./SearchBar"

export default function Navbar(props){
    return(
        <nav className='navbar'> 
            <img src={pic} className="nav-logo" alt="book-icon"/>
            <span className="nav-title">Reading list.</span>
            <span className= "searchbar-span"><SearchBar className="search" searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm} handleSearch={props.handleSearch}></SearchBar></span>
        </nav>
    )
}