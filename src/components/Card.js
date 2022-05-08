import React from "react";
import penPic from "../images/author.jpg"



export default function Card(props){
    let imageText;
    if(props.book.hasOwnProperty('readDate')){
        imageText = "Finished";
    } else{
        imageText = "In Progress";
    }
    return (
        <div>
            <div className="card-container">
                <div className="card-image-badge">{imageText}</div>
                <img className="card-image"src={props.book.imageUrl} alt="bookPic"></img>
                <div className="card-body">
                    <div className="card-author-info">
                        <span><img className="card-link-image" src={penPic} style={{width:"28px", height:"40px"}} alt="pen-icon"></img></span>
                        <span className="card-author-name">{props.book.Author}</span>
                        <span><a className="card-link-text" href={props.book.goodReadsProfileURL}>Goodreads profile</a></span>
                    </div>
                    <div className="card-title">{props.book.title}</div>
                    <div className="card-date-read">{props.book.readDate}</div>
                    <p className="card-about">{props.book.description}</p>
                </div>
            </div>
            <hr className="card-divider"/>
        </div>
    )
}
