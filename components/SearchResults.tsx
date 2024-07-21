import { Box } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const SearchResults = ({ products }: { products: any[] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "2rem 0",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return (
          <ProductCard
            id={product.id}
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            // rating={product.rating}
          />
        );
      })}
    </Box>
  );
};

export default SearchResults;
