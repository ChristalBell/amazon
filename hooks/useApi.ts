import { getProducts } from "@/lib/api/products";
import { Products } from "@/types/api";
import { useState } from "react";

export const useApi = () => {
  const [products, setProducts] = useState<Products[]>([]);
};
