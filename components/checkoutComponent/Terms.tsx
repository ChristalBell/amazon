import { COLORS } from "@/styles/colors";
import React from "react";

const Terms = () => {
  return (
    <div>
      <p style={{ fontSize: ".6rem", marginTop: "-.75rem" }}>
        By placing your order, you agree to Amazon's{" "}
        <span style={{ color: COLORS.teal }}>privacy notice</span> and{" "}
        <span style={{ color: COLORS.teal }}>conditions of use.</span>
      </p>
    </div>
  );
};

export default Terms;
