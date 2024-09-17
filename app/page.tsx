"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { setProducts } from "@/store/productsSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data));
        setIsLoading(false);
        console.log(setProducts);
      })
      .catch((error) => {
        console.error(error);
        console.log(setProducts);
      });
    // }, [dispatch]);
  });

  // if (isLoading) {
  //   return <div> Looking for your products. Thanks for waiting</div>;
  // }

  return (
    <Box>
      <Typography variant="h1">Home</Typography>
      <p> this is my main page</p>
    </Box>
  );
};

export default Home;
