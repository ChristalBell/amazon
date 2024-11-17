"useClient";
import { COLORS } from "@/styles/colors";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import PrimeCard from "./PrimeCard";
import SinglePriceCard from "./SinglePriceCard";

const ProductDetails = ({ product }: { product: any }) => {
  console.log(product.title);
  return (
    <Container
      sx={{
        backgroundColor: COLORS.white,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <p>image</p>
      </Box>
      <Box>
        <h4>{product.title}</h4>
        <p>Rating</p>
        <h3>${product.price}</h3>
        <p style={{ color: COLORS.teal }}>
          <b>Free</b> Returns
        </p>
        <p>Lower Price Availability </p>
        <h5>Description </h5>
        <p>descriptions </p>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PrimeCard />
          <SinglePriceCard />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
