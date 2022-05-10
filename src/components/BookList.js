import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import {useState} from "react";


export default function BookList(props){
    const renderBookList= props.books.map(book => {
        return(
            <Card 
                key={book.id}
                book={book}
            />
        )
      });
      return(
        <div className="deck"> 
            <>{renderBookList}</>
        </div>
      )
}
