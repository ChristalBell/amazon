import { COLORS } from "@/styles/colors";
import React from "react";
import AddToCartButton from "./shared/AddToCartButton";
import RemoveFromCartButton from "./shared/RemoveFromCartButton";

const SinglePriceCard = ({ product }: { product: any }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ justifyContent: "left" }}>
        <h3>$ {product.price}</h3>
        <p style={{ color: COLORS.teal }}>FREE Returns</p>
        <p style={{ color: COLORS.teal }}>
          FREE delivery <b>in 2 days</b>
        </p>
        <p>
          Or fastest delivery <b>tomorrow.</b> Order within{" "}
          <p style={{ color: COLORS.green }}>10 hrs and 8 mins</p>
        </p>
        <p style={{ color: COLORS.teal }}>Deliver to New York 10011</p>
        <p style={{ color: COLORS.red }}>
          <b>Only 7 left in stock - order soon.</b>
        </p>
      </div>

      <AddToCartButton />
      <RemoveFromCartButton />
    </div>
  );
};

export default SinglePriceCard;
