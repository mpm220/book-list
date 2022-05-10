import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import data from "./Data";


function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(data);
  const getSearchResults = (searchTerm)=> {
        setSearchTerm(searchTerm);
        if(searchTerm !== ""){
            const newBookList = data.filter((book) => {
                return Object.values(book).join("").toLowerCase().includes(searchTerm.toLowerCase())
            });
            setSearchResults(newBookList);
        }
        else{
            setSearchResults(data);
        }
    };
  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={getSearchResults}/>
      <BookList books={searchResults} />
    </>
  );
}

export default App;

