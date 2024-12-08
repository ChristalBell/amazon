import { COLORS } from "@/styles/colors";
import React from "react";

const CostDetail = () => {
  return (
    <div
      style={{
        backgroundColor: COLORS.lightGrey,
        padding: ".1rem 1rem",
        fontSize: "14px",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: COLORS.teal }}> How are shopping costs calculated?</p>
      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
        Prime shipping benefits have been applied to your order.
      </p>
    </div>
  );
};

export default CostDetail;
