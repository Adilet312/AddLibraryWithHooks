import React from 'react';
import SearchedBooks from './SearchedBooks.js';

const SortedBooks = ({bookList,sortBy,deleteBook}) =>{
    let sortedBooks = bookList.sort( (a,b) => sortBy==='ascending' ? (a.title.toLowerCase() < b.title.toLowerCase() ? -1: 1) :(a.title.toLowerCase() < b.title.toLowerCase() ? 1: -1));
  return(
       <div>
        <SearchedBooks books = {sortedBooks} deleteBook = {deleteBook}/>
       </div>
  )
}
export default SortedBooks;
