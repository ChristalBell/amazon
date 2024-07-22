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

  console.log(products);

  // test filter

  const searchItems = () => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes("gold");
    });
  };
  // console.log(searchItems());

  const found = searchItems();
  console.log("the bottom is found ");
  console.log(found);

  // end of test filter

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(products);

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
