"use client";
import ProductCard from "@/components/ProductCard";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/index";

const ProductPage = () => {
  const { id } = useParams();
  const singleProduct = useSelector((state: RootState) => state.api.data);

  console.log(singleProduct);

  useEffect(() => {
    singleProduct(Number(id));
  }, [singleProduct, id]);
  // const {singleProduct, getSingleProduct} = use

  // const {id} = useParams()
  // console.log(singleProduct);
  // useEffect(()=> {
  //   getSingleProduct(Number(id))
  // },[getSingleProduct, id])

  return (
    <div>
      <p>
        this is a single product page Set up global api first to hook this up
        also fix the products card
      </p>
      <Box>
        <p>{title}</p>
        <Image
          alt={title}
          src={image}
          width={225}
          height={257}
          priority={true}
        />
      </Box>
    </div>
  );
};

export default ProductPage;
