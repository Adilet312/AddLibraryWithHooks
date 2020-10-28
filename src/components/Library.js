import React,{Component} from 'react';
import Book from './Book.js';
import uuid from 'react-uuid'
import './css/Library.css';
import {GoTrashcan} from 'react-icons/go';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
const Library = ({books,deleteBook,updateBookProperties}) =>{
  return(
        <div className="output">
          <ul>
             {
               books.map( book => <li key = {book.bookId}> <Book bookId = {book.bookId} title = {book.title} author = {book.author} pages = {book.pages} updateBookProperties = {updateBookProperties}/><span
               onClick = { ()=> deleteBook(book)}><GoTrashcan/></span></li>)
             }
          </ul>
      </div>
        )
}
export default Library;
