import { Box } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

// interface Props {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   rating: { rate: number; count: number };
// }
const SearchResults = ({ products }: { products: any[] }) => {
  console.log(products);

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
            rating={product.rating}
          />
        );
      })}
    </Box>
  );
};

export default SearchResults;
