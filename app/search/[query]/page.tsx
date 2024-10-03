"use client";
import SearchResults from "@/components/SearchResults";
import { fetchData } from "../../../store/productsSlice";
import { AppDispatch, RootState } from "../../../store/index";
import { Home } from "@mui/icons-material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const QueryPage = () => {
  const { query } = useParams();
  // const products = useSelector((state) => state.products);
  const products = useSelector((state: RootState) => state.api);

  console.log(products);
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
