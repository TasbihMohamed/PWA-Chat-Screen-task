import { Stack, Typography } from "@mui/material";
import dots from "../Assets/Images/dots.png";
import report from "../Assets/Images/report.png";
import memberIcon from "../Assets/Images/memberIcon.png";
import phoneIcon from "../Assets/Images/phoneIcon.png";
import '../App.css'
import { useState } from "react";

export default function DropDown() {
  const [hide, setHide] = useState(false)
    const [items, setItems] = useState([
      { name: "Members", imgage: memberIcon },
    { name: "Share Number", imgage: phoneIcon },
    { name: "Report", imgage: report },
  ]);
  return (
    <Stack
      sx={{
        position: "relative",
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={`${dots}`} alt="dots" onClick={()=>setHide(!hide)} />

      {hide&&<Stack
      className="dropdown"
          sx={{    
          border: 1,
          borderColor: "#E5E5E0",
          borderRadius: 2,
          background: "white",
        }}
      >
        {items.map((item) => {
          return (
            <Stack
              direction="row"
              sx={{
                pr: 2,
                pl: 1,
                borderBottom: 1,
                borderColor: "#E5E5E0",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={`${item.imgage}`} alt="dots" />
              </Stack>
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>}
    </Stack>
  );
}
