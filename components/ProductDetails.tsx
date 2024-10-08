"useClient";
import { COLORS } from "@/styles/colors";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "@reduxjs/toolkit/query";
import { title } from "process";
import PrimeCard from "./PrimeCard";

const ProductDetails = () => {
  return (
    <Container
      sx={{
        backgroundColor: COLORS.white,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <p>Image goes here</p>
      </Box>
      <Box>
        <h4>Title</h4>
        <p>Rating</p>
        <h3>Price</h3>
        <p>
          <b>Free</b> Returns
        </p>
        <p>Lower Price Availability </p>
        <h5>Description </h5>
        <p>descriptions </p>
      </Box>
      <Box>
        <Box>
          <PrimeCard />{" "}
        </Box>
        <Box>
          <p>Pricing</p>
          <p>Add to Cart Button</p>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
