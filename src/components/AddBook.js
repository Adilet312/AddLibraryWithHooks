import React,{useState} from 'react';
import './css/AddBook.css';
const AddBook = ({sendBook}) =>{
  const [ title, setTitle] = useState('');
  const [ author, setAuthor] = useState('');
  const [ pages, setPages] = useState(0);
  return(
  <div className = "add-form">
      <div className = "add-book">
      <h3  onClick = {(event) => {
        let display = event.target.parentNode.parentNode.classList;
        display.toggle('add-form');
      }}>+ Add Book</h3>
      </div>
      <form className = "login-form" onSubmit = {(e)=> {
        sendBook(e,{ title: title, author: author, pages: pages});
        setTitle('');
        setAuthor('');
        setPages(0);
        }
      }>
        <input type = "text" placeholder = "Title" value = {title} name = "title" className = "title" onChange = {(e)=>setTitle(e.target.value)}/>
        <input type = "text" placeholder = "Author" value = {author} name = "author"  className = "author" onChange = {(e)=>setAuthor(e.target.value)}/>
        <input type = "number" placeholder = "Pages" value = {pages} name = "pages" className = "pages" onChange = {(e) => setPages(e.target.value)}/>
        <input type = "submit" className = "btn" name = "login" value = "Add book"/>
      </form>
</div>
  )
}
export default AddBook;
