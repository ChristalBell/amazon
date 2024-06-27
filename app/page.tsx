"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(() => {});
  }, []);

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProduct(data))
    .catch((error) => {
      console.error(error);
    });
  console.log(product);

  return (
    <Box>
      <Typography variant="h1">Hello World</Typography>
    </Box>
  );
};

export default Home;
