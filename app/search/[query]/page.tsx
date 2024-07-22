"use client";
import SearchResults from "@/components/SearchResults";
import { Home } from "@mui/icons-material";
import { useParams } from "next/navigation";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const QueryPage = () => {
  const { query } = useParams();

  // const filterProducts = () => {
  //   return products.filter((product) => {
  //     return product.title.toLowerCase().includes(query);
  //   });
  // };

  // const filteredProducts = filterProducts();
  // console.log("the bottom is found ");
  // console.log(filteredProducts);

  return (
    <div>
      <p>query page</p>
      {/* {<SearchResults products={filteredProducts} />} */}
    </div>
  );
};

export default QueryPage;
