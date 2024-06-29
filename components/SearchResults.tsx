import React from "react";
import Box from "@mui/material/Box";

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
        return <Box key={product.id}>{product.title}</Box>;
      })}
    </Box>
  );
};

export default SearchResults;
