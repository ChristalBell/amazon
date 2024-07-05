import { COLORS } from "@/styles/colors";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

const Ratings = ({ rating }: { rating: number }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}>
      <Box sx={{ marginRight: "0.5rem" }}>
        <Image alt="star" src="/star-icon.png" height={20} width={20} />
        <Image alt="star" src="/star-icon.png" height={20} width={20} />
        <Image alt="star" src="/star-icon.png" height={20} width={20} />
        <Image alt="star" src="/star-icon.png" height={20} width={20} />
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          color: COLORS.teal,
          "&:hover": { color: COLORS.orange },
        }}
      >
        {/* {rating.count} */}
      </Typography>
    </Box>
  );
};

export default Ratings;
