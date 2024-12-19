import { Button } from "@mui/material";
import React from "react";
import { removeCartItems } from "@/store/cartItemReducer";
import { useAppDispatch } from "@/app/hooks";
const RemoveFromCartButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div style={{ marginTop: ".75rem" }}>
      <Button variant="outlined" onClick={() => dispatch(removeCartItems())}>
        Remove
      </Button>
    </div>
  );
};

export default RemoveFromCartButton;
