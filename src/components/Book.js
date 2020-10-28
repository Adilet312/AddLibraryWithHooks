import React from 'react';
const Book = (props) => {
  const {bookId,title,author,pages,updateBookProperties} = props;
  return (
      <>
       <h2 contentEditable suppressContentEditableWarning onBlur = {(event) => updateBookProperties('title',event.target.innerText,bookId)}>{title}</h2>
       <p  contentEditable suppressContentEditableWarning onBlur = {(event) => updateBookProperties('author',event.target.innerText,bookId)}>{author}</p>
       <p  contentEditable suppressContentEditableWarning onBlur = {(event) => updateBookProperties('pages',event.target.innerText,bookId)}>{pages}</p>
      </>
  )
}
export default Book;
