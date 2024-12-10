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
      .then((data) => data.filter())
      .then((searchedItems) => setSearchedItems(searchedItems));
  });

  //     .then((searchedItems) => setSearchedItems(searchedItems))
  //     .then ((searchedItems.filter((searchedItem: any) => {
  //       searchedItem.title.toLowerCase()includes.(query: string [])
  //     })));
  // }, [query, searchedItems]);
  // console.log(searchedItems);

  // const filterProducts = () => {
  //   return searchedItems.filter((searchedItem: any) => {
  //     return searchedItem.title.toLowerCase().includes(query.toString());
  //   });
  // };

  // const filteredProducts = filterProducts();
  // console.log(filteredProducts);

  const filteredProducts = searchedItems.filter((searchedItem: any) =>
    searchedItem.title.toLowerCase().includes(query.toString)
  );
  console.log(filteredProducts);
  return (
    <div style={{ display: "flex" }}>
      {<SearchResults products={filteredProducts} />}
    </div>
  );
};

export default QueryPage;
