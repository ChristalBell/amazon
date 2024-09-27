"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/productsSlice";
import { AppDispatch, RootState } from "../store/index";
import ProductCard from "../components/ProductCard";
import { wrap } from "module";

const DataDisplay: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div> Error: {error}</div>;
  console.log(data);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((product) => {
        return (
          <ProductCard
            key={product.title}
            image={product.image}
            price={product.price}
            title={product.title}
            id={product.id}
          />
        );
      })}

      {/* <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataDisplay;
