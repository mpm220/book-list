import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import data from "./Data";


function App() {

  
  return (
    <>
      <Navbar />
      <BookList books={data} />
    </>
  );
}

export default App;

