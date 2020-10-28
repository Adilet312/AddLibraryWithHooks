import React from 'react';
import SearchedBooks from './SearchedBooks.js';

const SortedBooks = ({bookList,sortBy,deleteBook,updateBookProperties}) =>{
    let sortedBooks = bookList.sort( (a,b) => sortBy==='ascending' ? (a.title.toLowerCase() < b.title.toLowerCase() ? -1: 1) :(a.title.toLowerCase() < b.title.toLowerCase() ? 1: -1));
  return(
       <div>
        <SearchedBooks books = {sortedBooks} deleteBook = {deleteBook} updateBookProperties = {updateBookProperties}/>
       </div>
  )
}
export default SortedBooks;
