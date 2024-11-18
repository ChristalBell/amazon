"useClient";
import { COLORS } from "@/styles/colors";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import PrimeCard from "./PrimeCard";
import SinglePriceCard from "./SinglePriceCard";
import Image from "next/image";

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
        <Image
          alt={product.title}
          src={product.image}
          width={225}
          height={257}
          priority={true}
        />
      </Box>
      <Box>
        <h4>{product.title}</h4>
        <p>rating</p>
        <h3>${product.price}</h3>
        <p style={{ color: COLORS.teal }}>
          <b>Free</b> Returns
        </p>
        <p>Lower Price Availability </p>
        <h5>Description </h5>
        <p>{product.description} </p>
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
          <SinglePriceCard product={product} />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
