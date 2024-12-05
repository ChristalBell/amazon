import { addCartItems } from "@/store/cartItemSlice";
import { COLORS } from "@/styles/colors";
import { Button, getFormControlLabelUtilityClasses } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCartButton = () => {
  const dispatch = useDispatch();

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
        onClick={() => dispatch(addCartItems())}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default AddToCartButton;
