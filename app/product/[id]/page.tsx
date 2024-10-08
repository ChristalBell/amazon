"use client";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";

import ProductDetails from "@/components/ProductDetails";
import { inherits } from "util";

const ProductPage = () => {
  const products = useSelector((state: RootState) => state.api.data);
  const { id } = useParams();
  console.log(id);
  console.log(products);

  const getSingleProduct = () => {
    return products.filter((product) => {
      return product.id === id;
    });
  };
  const singleProduct = getSingleProduct();
  console.log(singleProduct);

  return <ProductDetails />;
};

export default ProductPage;
