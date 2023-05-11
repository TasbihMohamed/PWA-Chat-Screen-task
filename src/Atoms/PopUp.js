import {  Stack } from "@mui/material";
import React from "react";
import filesIcon from "../Assets/Images/filesIcon.png";
import Document from "../Assets/Images/Document.png";
import camera from "../Assets/Images/camera.png";
import video from "../Assets/Images/video.png";
import "../App.css";

export default function PopUp() {
  return (
    <div class="PopUp">
      <Stack sx={{ p: 1, borderRadius: 3 }} direction="row" gap={2}>
        <img src={`${camera}`} alt="camera" />
        <img src={`${video}`} alt="video" style={{ width: "20px" }} />
        <img src={`${Document}`} alt="Document" />
      </Stack>
    </div>
  );
}
