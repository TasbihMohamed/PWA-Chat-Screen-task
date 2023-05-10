import { Typography, Stack } from "@mui/material";
import React from "react";

export default function MessageTime({ time }) {
  return (
    <Stack gap={2} sx={{ alignItems: "center" ,justifyContent:'space-around'}} direction="row">
      <Stack
        sx={{ width: 1 / 4, background: "#B7B7B7", height: ".5px" }}
      ></Stack>
      <Typography sx={{ color: "#B7B7B7" }}>{time}</Typography>
      <Stack
        sx={{ width: 1 / 4, background: "#B7B7B7", height: ".5px" }}
      ></Stack>
    </Stack>
  );
}
