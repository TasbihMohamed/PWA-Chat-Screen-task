import { IconButton, Stack } from "@mui/material";
import React from "react";
import filesIcon from "../Assets/Images/filesIcon.png";
import Document from "../Assets/Images/Document.png";
import camera from "../Assets/Images/camera.png";
import video from "../Assets/Images/video.png";
import Tooltip from "@mui/material/Tooltip";
import "../App.css";

export default function PopUp() {
  return (
    <Tooltip
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: "#008000",
            borderRadius: 2,
            "& .MuiTooltip-arrow": {
              color: "#008000",
            },
          },
        },
      }}
      arrow
      placement="top"
      title={
        <Stack sx={{ p: 1, borderRadius: 3 }} 
        direction="row" gap={2}>
          <img src={`${video}`} alt="video" />
          <img src={`${camera}`} alt="camera" />{" "}
          <img src={`${Document}`} alt="Document" />
        </Stack>
      }
    >
      <IconButton>
        <img src={`${filesIcon}`} alt="filesIcon" />
      </IconButton>
    </Tooltip>
  );
}
