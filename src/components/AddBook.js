import React,{useState} from 'react';
import './css/AddBook.css';
const AddBook = ({sendBook}) =>{
  const [ title, setTitle] = useState('');
  const [ author, setAuthor] = useState('');
  const [ pages, setPages] = useState(0);
  return(
  <div>
      <div className = "add-book"><h3>Add Book</h3></div>
      <form className = "login-form" onSubmit = {(e)=> sendBook(e,{ title: title, author: author, pages: pages})}>
        <input type = "text" placeholder = "Title" name = "title" value = {title} className = "title" onChange = {(e)=>setTitle(e.target.value)}/>
        <input type = "text" placeholder = "Author" name = "author" value = {author} className = "author" onChange = {(e)=>setAuthor(e.target.value)}/>
        <input type = "number" placeholder = "Pages" name = "pages" value = {pages} className = "pages" onChange = {(e) => setPages(e.target.value)}/>
        <input type = "submit" className = "btn" name = "login" value = "Add book"/>
      </form>
</div>
  )
}
export default AddBook;
