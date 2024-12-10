"use client";
import SearchResults from "@/components/SearchResults";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// ${query}
const QueryPage = () => {
  const [searchedItems, setSearchedItems] = useState<any>({});
  const { query } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${query}`)
      .then((data) => data.json())
      .then((searchedItems) => setSearchedItems(searchedItems));
  }, [query, searchedItems]);

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
  return (
    <div style={{ display: "flex" }}>
      {<SearchResults products={filteredProducts} />}
    </div>
  );
};

export default QueryPage;
