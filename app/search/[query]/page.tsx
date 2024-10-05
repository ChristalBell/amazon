"use client";
import SearchResults from "@/components/SearchResults";

import { RootState } from "../../../store/index";
import { Home } from "@mui/icons-material";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const QueryPage = () => {
  const { query } = useParams();
  const products = useSelector((state: RootState) => state.api.data);

  console.log(products);
  const filterProducts = () => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(query.toString());
    });
  };
  const filteredProducts = filterProducts();
  console.log(filteredProducts);

  return (
    <div style={{ display: "flex" }}>
      {<SearchResults products={filteredProducts} />}
    </div>
  );
};

export default QueryPage;
