import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MessageTime from "../Atoms/MessageTime";

export default function Chat({ products }) {
  return (
    <>
      {products?.map((item) => {
        return (
          <Stack key={item.id}>
            <MessageTime time={item?.time} />
            <Stack
              gap={1}
              sx={{
                my: 2,
                flexDirection: item?.sender?.self ? "row-reverse" : "row",
              }}
            >
              {/* profile img */}

              <Box>
                <Stack
                  sx={{
                    borderRadius: 30,
                    width: 30,
                    overflow: "hidden",
                  }}
                >
                  <Stack
                    sx={{
                      backgroundImage: `url(${item?.sender?.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      height: 30,
                      width: 30,
                    }}
                  ></Stack>
                </Stack>
              </Box>
              {/* msg */}
              <Stack
                sx={{
                  p: 1,boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.08)",
                  background: item?.sender?.self ? "#1C63D5" : "white",
                  borderRadius: 3,
                }}
              >
                <Typography
                  sx={{ color: item?.sender?.self ? "white" : "#606060" }}
                >
                  {item?.message}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </>
  );
}
