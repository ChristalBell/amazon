import { allProducts } from "@/lib/api/products";
import { useState } from "react";

export const useApi = () => {
  const [products, setProducts] = useState(allProducts());
  console.log(products);
};
