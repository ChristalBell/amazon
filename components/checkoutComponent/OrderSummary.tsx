import { Box } from "@mui/material";
import React from "react";

const OrderSummary = () => {
  return (
    <div>
      <Box>
        <h3>Order Summary </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            marginBottom: "-1.5rem",
          }}
        >
          <p>subtotal ( items)</p>
          <p>$</p>
        </div>
        <div style={{ display: "flex", justifyContent: "left" }}>
          <p>Shipping & Handling</p>
          <p>$</p>
        </div>
      </Box>
    </div>
  );
};

export default OrderSummary;
