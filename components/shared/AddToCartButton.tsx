import { COLORS } from "@/styles/colors";
import { Button } from "@mui/material";
import { amber, yellow } from "@mui/material/colors";
import React from "react";

const AddToCartButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          background: COLORS.amber,
          color: COLORS.darkBlue,
          // backgroundColor: COLORS.yellow,
          width: "15rem",
          height: "3rem",
          borderRadius: "2rem",
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default AddToCartButton;
