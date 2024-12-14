"use client";
import SearchResults from "@/components/SearchResults";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// ${query}
const QueryPage = () => {
  const [searchedItems, setSearchedItems] = useState<any>([]);
  const { query } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((data) => data.json())
      .then((searchedItems) => setSearchedItems(searchedItems));
  });

  console.log(searchedItems);

  let filteredProducts = searchedItems;

  const filterProducts = () => {
    return filteredProducts.filter((filteredProduct: any) => {
      return filteredProduct.title.toLowerCase().includes(query);
    });
  };

  const found = filterProducts();
  // let filterProducts = searchedItems;

  // const found = () => {
  //   filterProducts.filter((filterProduct: any) => {
  //     return filterProduct.title.toLowerCase().includes(query.toString());
  //   });
  // };

  // const foundProducts = found();

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/`)
  //     .then((data) => data.json())
  //     .then((searchedItems) => setSearchedItems(searchedItems));
  // });

  // const filterProducts = () => {
  //   return searchedItems.filter((searchedItem: any) => {
  //     return searchedItem.title.toLowerCase().includes(query.toString());
  //   });
  // };

  // const filteredProducts = filterProducts();

  return (
    <div style={{ display: "flex" }}>{<SearchResults products={found} />}</div>
  );
};

export default QueryPage;
