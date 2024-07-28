import { getProducts } from "@/lib/api/products";
import { useState } from "react";

interface Products {
  category: "";
  description: "";
  id: 0;
  image: "";
  price: 0;
  rating: { rate: 0; count: 0 };
  title: "";
}

export const useApi = () => {
  const [products, setProducts] = useState<Products[]>([]);

  const getProducts = async () => {
    const { data, error } = await products.from("getProducts").select("*");

    if (data) {
      setProducts(data);
    }

    if (error) console.log(error);
  };
};
