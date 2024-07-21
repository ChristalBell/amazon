"use client";
import { Paper, InputBase, IconButton } from "@mui/material";
import React, { FormEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { COLORS } from "@/styles/colors";
import { useRouter } from "next/navigation";

const SearchBar = ({ products }: { products: any[] }) => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  // shows the searched item in https:
  const searchProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${query}/`);
  };

  // const handleChange = (event: SelectChangeEvent) => {
  //   setQuery(event.target.value as string);
  //   setFilteredProducts(event.target.value);
  // };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "80vw",
      }}
      onSubmit={searchProducts}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Amazon"
        inputProps={{ "aria-label": "search amazon" }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          padding: "0.625rem",
          backgroundColor: COLORS.paleOrange,
          borderRadius: "0 0.25rem 0.25rem 0 ",

          "&:hover": {
            backgroundColor: COLORS.orange,
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
