"use client";
import SearchResults from "@/components/SearchResults";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const QueryPage = ({ products }: { products: any[] }) => {
  const { query } = useParams();
  console.log(products);

  return (
    <div>
      <p>query page</p>
      {/* {<SearchResults products={filteredProducts} />} */}
    </div>
  );
};

export default QueryPage;
