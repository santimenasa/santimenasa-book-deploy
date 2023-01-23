//get by id
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField
} from "@mui/material";
import { useState } from "react";

const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      const bookData = await axios(`http://localhost:5000/books/${id}`)
      setInputs(bookData.data.books)
      console.log(bookData.data);
    }
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked)
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };

  const handleChange = (e) => {
    console.log(e);
    setInputs((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  function handleChecked() {
    setChecked((prevData) => !prevData);
  }
  console.log(inputs);
  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginRight={"auto"}
            marginLeft={"auto"}
            marginTop={"10%"}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs?.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs?.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs?.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs?.price}
              onChange={handleChange}
              type={"number"}
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />

            <FormLabel>image</FormLabel>
            <TextField
              value={inputs?.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />

            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChecked} />}
              label="Available"
            />

            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
    
    </div>
  );
};

export default BookDetail;

