import React from "react";
import "./Booksinfo.css"

const BookInfo = ({ bookinfo }) => {
  // Check if bookinfo is not an array or is undefined
  if (!Array.isArray(bookinfo) || !bookinfo) {
    // Check if bookinfo is an object and has the expected structure
    if (bookinfo && bookinfo.id) {
      const book = bookinfo;
      return (
        <div className="bookinfo">
          <div>
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(",")}</p>
            <p>Description: {book.volumeInfo.description}</p>
          </div>
          <div>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          </div>
        </div>
      );
    } else {
      // You can handle this case in a way that makes sense for your application
      return <p>No book information available.</p>;
    }
  }

  return (
    <div>
      {bookinfo.map((book) => (
        <div key={book.id} className="bookinfo">
          <div>
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(",")}</p>
            <p>Description: {book.volumeInfo.description}</p>
          </div>
          <div>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookInfo;
