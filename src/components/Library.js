import React,{Component} from 'react';
import Book from './Book.js';
import uuid from 'react-uuid'
import './css/Library.css';

const Library = ({books,deleteBook}) =>{
  return(
        <div className="output">
          <ul>
             {
               books.map( book => <li key = {uuid()}> <Book title = {book.title} author = {book.author} pages = {book.pages}/><span
               onClick = { ()=> deleteBook(book)}>X</span></li>)
             }
          </ul>
      </div>
        )
}
export default Library;
