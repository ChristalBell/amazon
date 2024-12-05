import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderLink from "./HeaderLink";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/base/Badge";

import { RootState, AppDispatch } from "../../store/index";
import { useSelector } from "react-redux";

const Header = () => {
  const linkList = [
    "Medical Care",
    "Groceries",
    "Best Sellers",
    "Amazon Basics",
    "Prime",
    "Music",
    "New Releases",
    "Customer Service",
    "Today's Deals",
    "Registry",
    "Books",
    "Pharmacy",
    "Amazon Home",
    "Gift Cards",
    "Fashion",
    "Luxury Stores",
  ];

  const { cartItems } = useSelector((state) => state.cartItems.cartItems);
  return (
    <Box
      sx={{
        backgroundColor: COLORS.darkBlue,
        color: COLORS.white,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: ".5rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <SearchBar />
        <Box sx={{ display: "flex" }}>
          <HeaderLink href="/orders">
            <Typography sx={{ fontSize: "0.75rem" }}>Returns</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
              & Orders
            </Typography>
          </HeaderLink>
          <HeaderLink
            href="/cart"
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <Badge badgeContent={cartItems}>
              <ShoppingCartIcon fontSize="large" />
            </Badge>
            <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
              Cart
            </Typography>
          </HeaderLink>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.mediumBlue,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HeaderLink
          href="/all"
          style={{ display: "flex", alignItems: "center" }}
        >
          {" "}
          <MenuIcon
            sx={{ marginRight: "0.25rem", "&:hover": { color: COLORS.orange } }}
          />
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, "&:hover": { color: COLORS.orange } }}
          >
            All
          </Typography>
        </HeaderLink>
        {linkList.map((link) => {
          return (
            <HeaderLink
              href={`/${link}`}
              key={link}
              style={{ marginRight: "0.5rem" }}
            >
              <Typography
                variant="body2"
                sx={{ "&:hover": { color: COLORS.orange } }}
              >
                {link}
              </Typography>
            </HeaderLink>
          );
        })}
        <HeaderLink href="shop-black-owned">
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, "&:hover": { color: COLORS.orange } }}
          >
            Shop Black-owned business
          </Typography>
        </HeaderLink>
      </Box>
    </Box>
  );
};

export default Header;
