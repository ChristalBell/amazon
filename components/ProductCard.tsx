"use client";
import { COLORS } from "@/styles/colors";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ratings from "./shared/Ratings";
import { useRouter } from "next/navigation";
import { RateReview } from "@mui/icons-material";

interface Props {
  id: number;
  image: string;
  price: number;
  title: string;
  rating: any;
}

// then import {product} : {product: any} instead of props down below. then everything will change to product. blah

const ProductCard = ({ id, image, price, title, rating }: Props) => {
  const router = useRouter();

  // uncomment this down below once you fix api
  // const selectProduct = (e: any) => {
  //   e.preventDefault();
  //   router.push(`/product/${product.id}`);
  // };

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
      onClick={selectProduct}
    >
      <Image alt={title} src={image} width={225} height={257} />
      <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Typography variant="h2" sx={{ fontWeight: 500, color: COLORS.black }}>
          {title}
        </Typography>
        <Ratings rating={rating} />
        <Typography variant="h2" sx={{ fontWeight: 700, color: COLORS.black }}>
          ${price}
        </Typography>
      </Link>
    </Box>
  );
};

export default ProductCard;
