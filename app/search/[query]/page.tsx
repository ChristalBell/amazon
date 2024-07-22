"use client";
import SearchResults from "@/components/SearchResults";
import { useParams } from "next/navigation";
import { title } from "process";
import React, { useEffect, useState } from "react";

// interface Props {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   rating: { rate: number; count: number };
// }

// { products }: { products: any[] }
const QueryPage = () => {
  const { query } = useParams();
  // const [filteredProducts, setFilteredProducts] = useState([{ products }]);

  // const searchProducts = () => {
  //   const filterProducts = filteredProducts.filter((filteredProduct) =>
  //     filteredProduct.title.toLowerCase().includes(query)
  //   );
  //   setFilteredProducts(filterProducts);
  // };

  // useEffect(() => {
  //   console.log(query);
  //   console.log(products);
  //   console.log("use effect ran");
  //   console.log(filteredProducts);
  // });

  const [filteredProducts, setFilteredProducts] = useState();
  console.log(query);

  return (
    <div>
      <p>query page</p>
      {/* {<SearchResults products={filteredProducts} />} */}
    </div>
  );
};

export default QueryPage;
