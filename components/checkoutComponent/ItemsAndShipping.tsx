import { Box, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { COLORS } from "@/styles/colors";

const ItemsAndShipping = () => {
  return (
    <Box
      sx={{
        border: "2px solid lightGrey",
        borderRadius: ".25rem",
        height: "10rem",
        width: "35vw",
      }}
    >
      <div>
        <p>image</p>
        <h3>title</h3>
        <p style={{ color: COLORS.red }}>price</p>
        <div>
          <h3>Choose your Prime delivery options:</h3>

          <RadioGroup defaultValue="female" name="controlled-radio">
            <Radio value="female" />
          </RadioGroup>
        </div>
      </div>
    </Box>
  );
};

export default ItemsAndShipping;
