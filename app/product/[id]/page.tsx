"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import ProductDetails from "@/components/ProductDetails";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((data) => data.json())
      .then((product) => setProduct(product));
  }, [id, product]);

  return <ProductDetails product={product} />;
};

export default ProductPage;
