import { COLORS } from "@/styles/colors";
import { Button } from "@mui/material";
import React from "react";

const PlaceOrderButton = () => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        variant="contained"
        style={{
          borderRadius: "2.5rem",
          backgroundColor: "#f2d148",
          color: "black",
          width: "14rem",
          height: "2.5rem",
        }}
      >
        PLACE YOUR ORDER
      </Button>
    </div>
  );
};

export default PlaceOrderButton;
