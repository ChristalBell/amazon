import { Container } from "@mui/material";
import React from "react";
import PrimeCard from "../PrimeCard";
import { COLORS } from "@/styles/colors";

const Checkout = () => {
  return (
    <Container style={{ display: "flex", backgroundColor: COLORS.white }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <h2>1 Shipping Address</h2>
          </div>
          <div>
            <p style={{ width: "7.5rem" }}>
              Harry Potter 123 Diagon Alley London WC2H 9FB United Kingdom
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2>2 Payment Method</h2>
          <div>
            <h3>Paying with Galleons</h3>
            <p>
              <b style={{ color: COLORS.teal }}>Billing Address: </b> Harry
              Potter, 123 Diagon Alley...
            </p>
          </div>
        </div>

        <div>
          <h2>3 Review Items and Shipping</h2>
        </div>
      </Container>
      <div>
        <Container>
          <p>place your order button</p>
          <p>Order Summary</p>
          <p>Order total</p>
          <PrimeCard />
        </Container>
      </div>
    </Container>
  );
};

export default Checkout;
