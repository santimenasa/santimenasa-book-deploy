import React from "react";
import "./index.css"
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books  from "./components/book/Books";
import AboutUs from "./components/AboutUs";
import BookDetail from "./components/book/BookDetail";


function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route>
            <Route path="/" element={< Home/>} exact />
            <Route path="/add" element={<AddBook />} exact/> 
            <Route path="/books" element={<Books />} exact/> 
            <Route path="/about" element={<AboutUs />} exact/> 
            <Route path="/books/:id" element={<BookDetail />} exact/> 
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
