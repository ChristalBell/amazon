"use client";
import SearchResults from "@/components/SearchResults";
import { Home } from "@mui/icons-material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const QueryPage = () => {
  const { query } = useParams();

  const [products, setProducts] = useState([
    {
      category: "",
      description: "",
      id: 0,
      image: "",
      price: 0,
      rating: { rate: 0, count: 0 },
      title: "",
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  console.log(products);

  // test filter

  const filterProducts = () => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(query.toString());
    });
  };
  // console.log(searchItems());

  const filteredProducts = filterProducts();
  console.log("the bottom is found ");
  console.log(filteredProducts);

  // end of test filter

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(products);

  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    <div>
      <p>query page</p>
      {<SearchResults products={filteredProducts} />}
    </div>
  );
};

export default QueryPage;
