import React from "react";
import editIcon from "../Assets/Images/editIcon.png";
import backIcon from "../Assets/Images/backIcon.png";
import { Stack, Typography } from "@mui/material";

export default function Title({ data }) {
  return (
    <Stack
      direction="row"
      sx={{ my: 1, justifyContent: "space-between", alignItems: "flex-end" }}
    >
      <Stack direction="row" gap={2} sx={{ alignItems: "center" }}>
        <Stack>
          <img src={`${backIcon}`} alt="backIcon" />
        </Stack>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "24px ",
            lineHeight: "30px",
            color: "#141E0D",
          }}
        >
          {data.name}
        </Typography>
      </Stack>
      <Stack>
        <img src={`${editIcon}`} alt="editIcon" />
      </Stack>
    </Stack>
  );
}
