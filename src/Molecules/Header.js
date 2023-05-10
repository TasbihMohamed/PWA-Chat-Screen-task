import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import GroupImage from "../Atoms/GroupImage";
import DropDown from "../Atoms/DropDown";

export default function Header({ data, products }) {
  return (
    <Stack
      direction="row"
      sx={{
        my: 2,
        justifyContent: "space-between" ,
        alignItems: "flex-end",
      }}
    >
      <Stack direction="row" gap={2} sx={{ alignItems: "center"}}>
        <GroupImage products={products} />
        <Box>
          <Stack direction="row" gap={1}>
            <Typography sx={{ color: "#606060" }}> From </Typography>
            <Typography sx={{ fontWeight: 600, color: "#141E0D" }}>
              {data.from}
            </Typography>
          </Stack>
          <Stack direction="row" gap={1}>
            <Typography sx={{ color: "#606060" }}>To </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#141E0D",
              }}
            >
              {data.to}
            </Typography>
          </Stack>
        </Box>
      </Stack>

      <DropDown/>
    </Stack>
  );
}
