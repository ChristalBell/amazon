"use client";
import Checkout from "@/components/checkout/Checkout";
import { useParams } from "next/navigation";

const CheckoutDisplay: React.FC = () => {
  return (
    <div>
      <Checkout />
    </div>
  );
};

export default CheckoutDisplay;
