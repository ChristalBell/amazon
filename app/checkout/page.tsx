"use client";

import Checkout from "@/components/checkoutComponent/Checkout";
import { useParams } from "next/navigation";

const CheckoutDisplay: React.FC = () => {
  return (
    <div>
      <Checkout />
    </div>
  );
};

export default CheckoutDisplay;
