import { COLORS } from "@/styles/colors";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ratings from "./shared/Ratings";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        width: 225,
        height: 450,
        margin: ".5rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image alt={product.title} src={product.image} width={225} height={257} />
      <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Typography variant="h2" sx={{ fontWeight: 500, color: COLORS.black }}>
          {product.title.substring(0, 15)}...
        </Typography>
        <Ratings rating={product.rating} />
        <Typography variant="h2" sx={{ fontWeight: 700, color: COLORS.black }}>
          ${product.price}
        </Typography>
      </Link>
    </Box>
  );
};

export default ProductCard;
