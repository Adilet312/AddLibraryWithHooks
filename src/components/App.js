import React,{useState,useEffect} from 'react';
import Library from './Library.js';
import SortedBooks from './SortedBooks.js';
import AddBook from './AddBook.js';
const App = () =>{
	const [ getBookList, setBookList ] = useState([]);
	const [ getSortBy, setSortBy] = useState('descending');
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
	return(
				<React.Fragment>
					 <AddBook sendBook = {getBook}/>
					 <SortedBooks  bookList = {getBookList}  sortBy = {getSortBy}/>
				</React.Fragment>
	)
}
export default App;
/*
1.List all the books
2.Sort books by ascending and descending order
3.Search
*/
