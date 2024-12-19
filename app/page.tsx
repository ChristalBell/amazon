"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const DataDisplay: React.FC = () => {
  const [products, setProducts] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        // Handle error
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {isLoading && <p>Loading...</p>}

      {!isLoading &&
        products.map((product: any) => {
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
    </div>
  );
};

export default DataDisplay;
