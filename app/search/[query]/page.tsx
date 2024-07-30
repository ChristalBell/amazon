"use client";
import SearchResults from "@/components/SearchResults";
import { Home } from "@mui/icons-material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Products } from "@/types/api";

const QueryPage = () => {
  const { query } = useParams();
  const [products, setProducts] = useState<Products[]>([]);

  const filterProducts = () => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(query.toString());
    });
  };
  const filteredProducts = filterProducts();
  console.log(filteredProducts);

  // const [products, setProducts] = useState([
  //   {
  //     category: "",
  //     description: "",
  //     id: 0,
  //     image: "",
  //     price: 0,
  //     rating: { rate: 0, count: 0 },
  //     title: "",
  //   },
  // ]);

  // const [isLoading, setIsLoading] = useState(true);

  // const filterProducts = () => {
  //   return products.filter((product) => {
  //     return product.title.toLowerCase().includes(query.toString());
  //   });
  // };

  // const filteredProducts = filterProducts();
  // console.log(filteredProducts);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <div> Looking for your products. Thanks for waiting</div>;
  // }

  // console.log(products);

  return (
    <div>
      <p>This is your Search Page</p>
      {<SearchResults products={filteredProducts} />}
    </div>
  );
};

export default QueryPage;
