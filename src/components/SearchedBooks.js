import React,{ useState } from 'react';
import Library from './Library.js';
import './css/SearchedBooks.css';
const SearchedBooks = ({books,deleteBook,updateBookProperties}) =>{
  const [ getInput, setInput ] = useState('');
  let searchBooks = books.filter( book => book.title.toLowerCase().includes(getInput.toLowerCase()));
  return(
   <div className = 'searchBox'>
    <input type = 'search' className ="inputData" placeholder = "Search" onChange = {(event) => setInput(event.target.value)}/>
    <Library books = {searchBooks} deleteBook = {deleteBook} updateBookProperties = {updateBookProperties}/>
   </div>
  )
}

export default SearchedBooks;
