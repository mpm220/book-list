import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import data from "./Data";


function App() {
//   const searchHandler = (searchTerm)=> {
//     setSearchTerm(searchTerm);
//     if(searchTerm !== ""){
//         const newBookList = props.books.filter((book) => {
//             return Object.values(book).join("").toLowerCase().includes(searchTerm.toLowerCase())
//         });
//         setSearchResults(newBookList);
//     }
//     else{
//         setSearchResults(props.books);
//     }
// };
  
//const searchBar = <SearchBar term={searchTerm} searchKeyword={searchHandler}/>
  
  return (
    <>
      <Navbar />
      <BookList books={data} />
    </>
  );
}

export default App;

