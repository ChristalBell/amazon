"use client";
import { useParams } from "next/navigation";
import React from "react";

const QueryPage = () => {
  const { query } = useParams();

  return <div>QueryPage</div>;
};

export default QueryPage;
