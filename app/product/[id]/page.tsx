"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import ProductDetails from "@/components/ProductDetails";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const products = useSelector((state: RootState) => state.api.data);
  const [product, setProduct] = useState<any>({});

  const { id } = useParams();

  useEffect(() => {
    setProduct(products.filter((item) => item.id === Number(id)));
  }, [id, products]);

  console.log(products);
  return <ProductDetails product={product} />;
};

export default ProductPage;
