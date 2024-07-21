"use client";
import SearchResults from "@/components/SearchResults";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const QueryPage = ({ products }: { products: any[] }) => {
  const { query } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([products]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        return;
        product.title.toLowerCase().includes(query);
      })
    );
  }, [query, products]);

  return (
    <div>
      <p>query page</p>
      {<SearchResults products={filteredProducts} />}
    </div>
  );
};

export default QueryPage;
