"useClient";
import { COLORS } from "@/styles/colors";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import PrimeCard from "./PrimeCard";
import SinglePriceCard from "./SinglePriceCard";
import Image from "next/image";
import SpecificItemAddedButton from "./shared/SpecificItemAddedButton";

const ProductDetails = ({
  product,
}: {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  };
}) => {
  return (
    <Container
      sx={{
        backgroundColor: COLORS.white,
        display: "flex",
        // justifyContent: "space-between",
        paddingTop: "6rem",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box sx={{ margin: "0 2rem" }}>
        <img alt={product.title} src={product.image} width={225} height={257} />
      </Box>
      <Box sx={{ marginLeft: "2rem" }}>
        <h4>{product.title}</h4>
        {/* <p>{product.rating}</p> */}
        <h3>${product.price}</h3>
        <p style={{ color: COLORS.teal }}>
          <b>Free</b> Returns
        </p>
        <p>Lower Price Availability </p>
        <h5>Description </h5>
        <p>{product.description} </p>
        <SpecificItemAddedButton product={product} />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "2rem",
          }}
        >
          <Box
            sx={{
              border: 1,
              borderColor: "lightGrey",
              height: "15vh",
              marginBottom: "2rem",
              padding: "2rem",
              width: "20vw",
            }}
          >
            <PrimeCard />
          </Box>
          <Box
            sx={{
              border: 1,
              borderColor: "lightGrey",
              height: "40vh",
              padding: "2rem",
              width: "20vw",
            }}
          >
            <SinglePriceCard product={product} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
