import { IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import sendIcon from "../Assets/Images/sendIcon.png";
import PopUp from "../Atoms/PopUp";
import filesIcon from "../Assets/Images/filesIcon.png";

export default function MessegeInput({ data }) {
  const text = `Reply to @${data?.to}`;
  const [hide, setHide] = useState(false);

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
        <Stack>
          {hide && <PopUp />}
          <IconButton>
            <img
              src={`${filesIcon}`}
              onClick={() => setHide(!hide)}
              alt="filesIcon"
            />
          </IconButton>
        </Stack>
        <Stack>
          <img src={`${sendIcon}`} alt="sendIcon" />
        </Stack>
      
      </Stack>
  
    </Stack>
  );
}
