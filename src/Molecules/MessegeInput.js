import { Stack } from "@mui/material";
import React from "react";
import sendIcon from "../Assets/Images/sendIcon.png";
import PopUp from "../Atoms/PopUp";

export default function MessegeInput({ data }) {
  const text = `Reply to @${data?.to}`;
  return (
    <Stack
      sx={{
        position: "relative",
      }}
    >
      <input
        style={{
          height: "42px",
          border: "0",
          padding: "0 20px",
          background: "white",
          borderRadius: "8px",
        }}
        placeholder={text}
      />
      <Stack
        gap={2}
        sx={{
          width: 32,
          px: 5,
          alignItems: "center",
          position: "absolute",
          top: " 5px",
          right: 5,
        }}
        direction="row"
      >
        <Stack >
          <PopUp />
        </Stack>
        <Stack>
          <img src={`${sendIcon}`} alt="sendIcon" />
        </Stack>
      </Stack>
    </Stack>
  );
}
