"use client";
import SearchResults from "@/components/SearchResults";
import { useParams } from "next/navigation";
import React from "react";

const QueryPage = () => {
  const { query } = useParams();

  return (
    <div>
      <SearchResults products={[query]} />
    </div>
  );
};

export default QueryPage;
