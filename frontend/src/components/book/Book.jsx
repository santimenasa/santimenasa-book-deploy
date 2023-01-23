import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./book.css";
import axios from "axios";

const Book = ({ book }) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = book;

  const deleteHandler = async() => {
   await axios
      .delete(`https://santimenasa-book-deploy-production.up.railway.app//books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>{price} USD$</h3>
      <Button LinkComponent={Link} to={`${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
