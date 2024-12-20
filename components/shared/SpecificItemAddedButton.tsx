import { addSelection } from "@/store/productReducer";
import { COLORS } from "@/styles/colors";
import { Button, getFormControlLabelUtilityClasses } from "@mui/material";
import React from "react";
import { useAppDispatch } from "@/app/hooks";

const SpecificItemAddedButton = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();

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
        onClick={() => {
          dispatch(() => addSelection(product));
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default SpecificItemAddedButton;
