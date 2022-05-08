import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import {useState} from "react";


export default function BookList(props){
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(props.books);
    const searchHandler = (searchTerm)=> {
        setSearchTerm(searchTerm);
        if(searchTerm !== ""){
            const newBookList = props.books.filter((book) => {
                return Object.values(book).join("").toLowerCase().includes(searchTerm.toLowerCase())
            });
            setSearchResults(newBookList);
        }
        else{
            setSearchResults(props.books);
        }
    };
    const renderBookList= searchResults.map(book => {
        return(
            <Card 
                key={book.id}
                book={book}
            />
        )
      });
      return(
        <div className="deck"> 
            <SearchBar term={searchTerm} searchKeyword={searchHandler}/>
            <>{renderBookList}</>
        </div>
      )
}