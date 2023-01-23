//get
import React, { useEffect, useState } from "react";
import Book from "./Book";
import "./book.css"
import axios from "axios";

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <div>
      <ul>
        {books &&
          Array.isArray(books) &&
          books.map((book, i /* books = [Rayuela, Principito, Etc] */) => (
            <li  key={i}>
              <Book book={book} /> {/* (book, i) = (Rayuela, 0) , ()*/}
            </li>
          ))}
      </ul>
    </div>
  );  
};

export default Books;
