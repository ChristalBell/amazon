"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { FormEvent, useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([
    {
      category: "",
      description: "",
      id: 0,
      image: "",
      price: 0,
      rating: { rate: 0, count: 0 },
      title: "",
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const filterProducts = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(products);

  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    <Box>
      <Typography variant="h1">Home</Typography>
    </Box>
  );
};

export default Home;
