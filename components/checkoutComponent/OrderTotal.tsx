import { COLORS } from "@/styles/colors";
import { Box } from "@mui/material";
import React from "react";

const OrderTotal = () => {
  return (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginBottom: "-1.5rem",
        }}
      >
        <p>Total before tax</p>
        <p>$</p>
      </div>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <p>Estimated tax to be collected</p>
        <p>$</p>
      </div>
      <div
        style={{
          color: COLORS.red,
          fontWeight: "bold",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <div
          style={{
            width: "25vw",
            display: "flex",
          }}
        >
          <p> Order Total</p>
          <p>$</p>
        </div>
      </div>
    </Box>
  );
};

export default OrderTotal;
