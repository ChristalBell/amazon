import { Button } from "@mui/material";
import React from "react";
import { removeCartItems } from "@/store/cartItemReducer";
import { useDispatch } from "react-redux";
const RemoveFromCartButton = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: ".75rem" }}>
      <Button variant="outlined" onClick={() => dispatch(removeCartItems())}>
        Remove
      </Button>
    </div>
  );
};

export default RemoveFromCartButton;
