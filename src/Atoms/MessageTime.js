import { Typography, Stack } from "@mui/material";
import React from "react";

export default function MessageTime({ time }) {
  const date = time?.split(" ")[0];

  return (
    <Stack
      gap={2}
      sx={{ mb: 2, alignItems: "center", justifyContent: "space-around" }}
      direction="row"
    >
      <Stack
        sx={{ width: 2/ 5, background: "#B7B7B7", height: ".5px" }}
      ></Stack>
      <Typography sx={{ color: "#B7B7B7" }}>{date}</Typography>
      <Stack
        sx={{ width:  2/ 5, background: "#B7B7B7", height: ".5px" }}
      ></Stack>
    </Stack>
  );
}
