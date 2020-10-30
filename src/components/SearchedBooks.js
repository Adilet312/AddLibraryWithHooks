import React,{ useState,useEffect } from 'react';
import Library from './Library.js';
import './css/SearchedBooks.css';
const SearchedBooks = ({books,deleteBook,updateBookProperties}) =>{
  let local_storage = window.localStorage;
  const [ getInput, setInput ] = useState(local_storage.getItem('search') || ' ');
  let searchBooks = books.filter( book => book.title.toLowerCase().includes(getInput.toLowerCase()));
  useEffect( () => {
    local_storage.setItem('search',getInput);
  },[getInput])
  return(
   <div className = 'searchBox'>
    <input type = 'search' className ="inputData" placeholder = "Search" onChange = {(event) => {
      setInput(event.target.value);

    }}/>
    <Library books = {searchBooks} deleteBook = {deleteBook} updateBookProperties = {updateBookProperties}/>
   </div>
  )
}

export default SearchedBooks;
