import Box from "@mui/material/Box";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Box>
      {product.title}
      {product.price}
    </Box>
  );
};

export default ProductCard;
