import React,{useState,useEffect} from 'react';
import {without} from 'lodash';
import Library from './Library.js';
import SortedBooks from './SortedBooks.js';
import AddBook from './AddBook.js';
import './css/App.css';
const App = () =>{
	const [ getBookList, setBookList ] = useState([]);
	const [ getSortBy, setSortBy] = useState('descending');
	const [ toggle, setToggle] = useState(true);
	useEffect(() =>{
		fetch('./bookList.json')
		.then( data => data.json())
		.then( data => setBookList(data))
		.catch( error => console.log(error));
	},[])
	const getBook = (event,new_book) => {
		event.preventDefault();
		setBookList([...getBookList,new_book]);
	}
	const deleteBook = (book) =>{
		let tempBooks = without(getBookList,book);
		setBookList(tempBooks);
	}
	return(
				<React.Fragment>
						<AddBook sendBook = {getBook}/>
						<SortedBooks  bookList = {getBookList}  sortBy = {getSortBy} deleteBook = {deleteBook}/>
				</React.Fragment>
	)
}
export default App;
/*
1.List all the books
2.Sort books by ascending and descending order
3.Search
<div className = 'add-book'><span className = 'add open' onClick = { (event) => {
	let spanClass = event.target.classList;
	if(spanClass.contains('open') ){
		spanClass.remove('open');
		event.target.innerText = "-";
		spanClass.add('close');
	}
	else{
		spanClass.remove('close');
		event.target.innerText = "+";
		spanClass.add('open');
	}

}
}>+</span></div>
*/
