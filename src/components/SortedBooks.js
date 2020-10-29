import React ,{useState} from 'react';
import SearchedBooks from './SearchedBooks.js';
import {FaToggleOn} from 'react-icons/fa';
import  './css/SortedBooks.css';
const SortedBooks = ({bookList,sortBy,deleteBook,updateBookProperties}) =>{
    const [ name, setName ] = useState('title');
    let sortedBooks = bookList.sort( (a,b) => sortBy==='ascending' ? (a[`${name}`].toLowerCase() < b[`${name}`].toLowerCase() ? -1: 1) :(a[`${name}`].toLowerCase() < b[`${name}`].toLowerCase() ? 1: -1));
  return(
       <div>
       <div className = "sort">
         <select name="properties" className = "" onChange = {(e) => setName( e.target.value)}>
           <option value="title" selected>sort By</option>
           <option value="title">Title</option>
           <option value="author">Author</option>
        </select>
        <FaToggleOn style = {{fontSize:"30px",marginRight:"20px",marginTop:"10px",color:'purple'}}/>
      </div>
        <SearchedBooks books = {sortedBooks} deleteBook = {deleteBook} updateBookProperties = {updateBookProperties}/>
       </div>
  )
}
export default SortedBooks;
