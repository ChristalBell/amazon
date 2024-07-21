"use client";
import { COLORS } from "@/styles/colors";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ratings from "./shared/Ratings";

interface Props {
  id: number;
  image: string;
  price: number;
  title: string;
  // rating: { rate: number; count: number };
}

const ProductCard = ({ id, image, price, title }: Props) => {
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
      <Image alt={title} src={image} width={225} height={257} />
      <Link href={`/product/${id}`} style={{ textDecoration: "none" }}>
        <Typography variant="h2" sx={{ fontWeight: 500, color: COLORS.black }}>
          {title}
        </Typography>
        {/* <Ratings rating={rating} /> */}
        <Typography variant="h2" sx={{ fontWeight: 700, color: COLORS.black }}>
          ${price}
        </Typography>
      </Link>
    </Box>
  );
};

export default ProductCard;
