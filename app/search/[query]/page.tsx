"use client";
import SearchResults from "@/components/SearchResults";
import {} fom "../../store"; 

import { Home } from "@mui/icons-material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const QueryPage = () => {
  // const { query } = useParams();
  // const products = useSelector((state) => state.products);

  const filterProducts = () => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(query.toString());
    });
  };
  const filteredProducts = filterProducts();
  console.log(filteredProducts);

  return (
    <div>
      <p>This is your Search Page</p>
      {<SearchResults products={filteredProducts} />}
    </div>
  );
};

export default QueryPage;
