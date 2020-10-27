import React from 'react';
const Book = (props) => {
  const {title,author,pages} = props;
  return (
      <>
       <h2>{title}</h2>
       <p>{author}</p>
       <p>{pages}</p>
      </>
  )
}
export default Book;
