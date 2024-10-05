"use client";
import ProductCard from "@/components/ProductCard";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/index";
import { Container } from "@mui/material";
import { singleProduct } from "@/store/productsSlice";

const ProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const single = useSelector((state: RootState) => state.api);
  useEffect(() => {
    dispatch(singleProduct(id));
  }, [dispatch]);

  // const dispatch = useDispatch<AppDispatch>();
  // const singleProduct = useSelector((state: RootState) => state.api);

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);
  // const { id } = useParams();

  // console.log(singleProduct);

  // const { id } = useParams();
  // const products = useSelector((state: RootState) => state.api.data);

  // console.log(products);
  // const filterProducts = () => {
  //   return products.filter((product) => {
  //     // return product.id.includes(id.toString());
  //     return product.title.toLowerCase().includes(id.toString());
  //   });
  // };
  // const filteredProducts = filterProducts();
  // console.log(filteredProducts);

  return (
    <div>
      <p>
        this is a single product page Set up global api first to hook this up
        also fix the products card
      </p>
      <Box>
        <Container maxWidth="xl">Single Product Page</Container>
      </Box>
      {/* <p>{title}</p> */}
    </div>
  );
};

export default ProductPage;
