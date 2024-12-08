import { Box, Container } from "@mui/material";
import React from "react";
import PrimeCard from "../PrimeCard";
import { COLORS } from "@/styles/colors";
import ItemsAndShipping from "./ItemsAndShipping";
import PlaceOrderButton from "./PlaceOrderButton";
import OrderSummary from "./OrderSummary";
import Terms from "./Terms";
import OrderTotal from "./OrderTotal";
import CostDetail from "./CostDetail";

const Checkout = () => {
  return (
    <Container
      style={{
        display: "flex",
        backgroundColor: COLORS.white,
        height: "100vh",
      }}
    >
      <Container>
        <div className="shipping" style={{ display: "flex" }}>
          <div>
            <h2>
              <span style={{ marginRight: "2rem" }}>1 </span>Shipping Address
            </h2>
          </div>

          <div style={{ marginLeft: "4rem" }}>
            <p style={{ width: "7.5rem" }}>
              Harry Potter 123 Diagon Alley London WC2H 9FB United Kingdom
            </p>
          </div>
        </div>

        <div className="payment" style={{ display: "flex" }}>
          <h2>
            <span style={{ marginRight: "2rem" }}>2 </span> Payment Method
          </h2>
          <div style={{ marginLeft: "4rem" }}>
            <h3 style={{ marginBottom: "-.75rem" }}>Paying with Galleons</h3>
            <p>
              <span style={{ color: COLORS.teal }}>Billing Address: </span>{" "}
              Harry Potter, 123 Diagon Alley...
            </p>
          </div>
        </div>

        <div className="review">
          <h2>
            <span style={{ marginRight: "2rem" }}>3</span> Review Items and
            Shipping
          </h2>

          <ItemsAndShipping />
        </div>
      </Container>

      <div className="right">
        <Container>
          <Box
            sx={{
              border: ".5px solid lightGrey",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "1rem",
            }}
          >
            <PlaceOrderButton />
            <Terms />

            <OrderSummary />
          </Box>
          <div style={{ paddingLeft: "1rem" }}>
            <OrderTotal />
          </div>
          <CostDetail />
          <PrimeCard />
        </Container>
      </div>
    </Container>
  );
};

export default Checkout;
