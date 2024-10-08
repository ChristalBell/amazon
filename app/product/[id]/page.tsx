"use client";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/index";
import ProductDetails from "@/components/ProductDetails";
import { fetchData } from "../../../store/productsSlice";
import { useEffect } from "react";
const ProductPage = () => {
  const products = useSelector((state: RootState) => state.api.data);
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch]);

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
