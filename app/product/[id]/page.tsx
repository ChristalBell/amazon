"use client";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import { fetchProduct } from "@/store/productsSlice";
import ProductDetails from "@/components/ProductDetails";

const ProductPage = () => {
  // const oneProduct = useSelector((state) => fetchProduct);
  const { id } = useParams();
  console.log(id);
  // console.log(oneProduct);

  // const getSingleProduct = () => {
  //   return products.filter((product) => {
  //     return product.title.toLowerCase().includes(id.toString());
  //   });
  // };
  // const singleProduct = getSingleProduct();
  // console.log(singleProduct);

  // const getSingleProduct = () => {

  //     return filteredProducts.id;
  //   };
  // };
  // const oneProduct = getSingleProduct();
  // console.log(oneProduct);

  return (
    <div>
      <p>
        {/* <ProductDetails id={id} /> */}
        this is a single product page Set up global api first to hook this up
        also fix the products card
      </p>
      <Box>
        <Container maxWidth="xl">Single Product Page</Container>
      </Box>
      {/* <p>{title}</p> */}
    </div>
  );
};

export default ProductPage;
