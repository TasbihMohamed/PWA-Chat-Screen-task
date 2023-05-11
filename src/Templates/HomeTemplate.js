import React from "react";


import { Container, Stack, Box } from "@mui/material";
import Title from "../Molecules/Title";
import Header from "../Molecules/Header";
import Chat from "../Molecules/Chat";
import MessegeInput from "../Molecules/MessegeInput";

const HomeTemplate = ({ products, data }) => {
  return (
    <Container maxWidth="lg" 
    sx={{ p: 2, pb:4, background: "#FAF9F4" }}>
      <Box>
        <Title data={data} />
        <Header data={data} products={products} />
        <Chat products={products} />
        <MessegeInput data={data} />
      </Box>
    </Container>
  );
};

export default HomeTemplate;
