import React,{useState,useEffect} from 'react';
import {without,findIndex} from 'lodash';
import Library from './Library.js';
import SortedBooks from './SortedBooks.js';
import AddBook from './AddBook.js';
import './css/App.css';
const App = () =>{
	const [ getBookList, setBookList ] = useState([]);
	const [ getSortBy, setSortBy ] = useState('descending');
	const [ toggle, setToggle ] = useState(true);
	const [ indexId, setIndexId ] = useState(0);
	useEffect(() =>{
		fetch('./bookList.json')
		.then( data => data.json())
		.then( data => {
			let currentIndex = indexId;
			data.map( book => {
				book.bookId = currentIndex++;
				return(book)
			})
			setIndexId(currentIndex)
			setBookList(data)

		})
		.catch( error => console.log(error));
	},[])
	const addBook = (event,new_book) => {
		event.preventDefault();
		setBookList([...getBookList,new_book]);
	}

	const deleteBook = (book) =>{
		let tempBooks = without(getBookList,book);
		setBookList(tempBooks);
	}

	const updateBook = (key,value,id) =>{
		let tempBooks  = getBookList;
		let findCurrentBookIndex = findIndex(tempBooks,{bookId: id});
		tempBooks[findCurrentBookIndex][key] = value;
		setBookList(tempBooks);
	}
	return(
				<React.Fragment>
						<AddBook sendBook = {addBook}/>
						<SortedBooks  bookList = {getBookList}  sortBy = {getSortBy} deleteBook = {deleteBook} updateBookProperties = {updateBook}/>
				</React.Fragment>
	)
}
export default App;
/*
1.List all the books
2.Sort books by ascending and descending order
3.Search

*/
