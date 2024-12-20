import { Box, RadioGroup, FormControl, FormLabel } from "@mui/material";
import React from "react";
import { COLORS } from "@/styles/colors";
import Radio from "@mui/material/Radio";
import PlaceOrderButton from "./PlaceOrderButton";
import Terms from "./Terms";
import { useSelector } from "react-redux";
import { getFinalSelection } from "@/store/productReducer";

const ItemsAndShipping = ({
  product,
}: {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  };
}) => {
  const selected = useSelector(getFinalSelection);
  console.log(selected);
  return (
    <div>
      <Box
        sx={{
          border: ".5px solid lightGrey",
          borderRadius: ".25rem",
          height: "10rem",
          width: "41vw",
          marginLeft: "3rem",
          boxShadow: "10px 5px 5px lightGrey",
        }}
      >
        {/* {selected.map((product: any) => {
          <div style={{ display: "flex" }}>
            <p>image</p>
            <h3>{product.title}</h3>
            <p style={{ color: COLORS.red, fontWeight: "bolder" }}>price</p>
          </div>;
        })} */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <p>image</p>
          <div>
            <h3>title</h3>
            <p style={{ color: COLORS.red, fontWeight: "bolder" }}>price</p>
          </div>

          <div>
            <legend>
              <h4>Choose your Prime delivery option:</h4>
            </legend>
            <div>
              <input
                type="radio"
                id="$2.99"
                name="Tomorrow morning $2.99 - Delivery"
                value="$2.99"
              />
              <label htmlFor="$2.99">
                <span style={{ color: COLORS.green }}>Tomorrow morning</span>{" "}
                $2.99 - Delivery
              </label>
            </div>

            <div>
              <input type="radio" id="one-day" name="drone" value="free" />
              <label htmlFor="one-day">
                <span style={{ color: COLORS.green }}>Tomorrow afternoon </span>{" "}
                FREE One Day Delivery
              </label>
            </div>

            <div>
              <input type="radio" id="amazon-day" name="drone" value="free" />
              <label htmlFor="amazon-day">
                <span style={{ color: COLORS.green }}>Friday</span> FREE Amazon
                Day Delivery
              </label>
            </div>
          </div>
        </div>
      </Box>

      <Box
        sx={{
          border: ".5px solid lightGrey",
          boxShadow: "10px 5px 5px lightGrey",
          borderRadius: ".25rem",
          height: "5rem",
          width: "40.25vw",
          marginLeft: "3rem",
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          paddingLeft: ".71rem",
        }}
      >
        <PlaceOrderButton />

        <div style={{ marginLeft: "1rem" }}>
          <h4 style={{ color: COLORS.red }}>Order total: $</h4>
          <Terms />
        </div>
      </Box>
    </div>
  );
};

export default ItemsAndShipping;
