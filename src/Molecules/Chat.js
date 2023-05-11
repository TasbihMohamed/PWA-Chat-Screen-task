import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import React from "react";
import MessageTime from "../Atoms/MessageTime";
import solid from "../Assets/Images/check-verified-02.png";
import { styled } from "@mui/material/styles";
import "../App.css";

export default function Chat({ products }) {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 8,
      top: 22,
      padding: "0 4px",
    },
  }));

  return (
    <>
      <MessageTime time={products[0]?.time} />

      {products?.map((item) => {
        return (
          <Stack key={item.id}>
            <Stack
              gap={1}
              sx={{
                my: 2,
                flexDirection: item?.sender?.self ? "row-reverse" : "row",
              }}
            >
              {/* profile img */}

              {item?.sender?.self == false && (
                <Box>
                  <StyledBadge
                    badgeContent={
                      <img
                        src={solid}
                        style={{
                          width: item?.sender?.is_kyc_verified?"10px":"0px",
                          position: "absolute",
                          bottom: "2px",
                          right: "0",
                          zIndex: "1",
                        }}
                      />
                    }
                    // color="primary"
                    sx={{ zIndex: "1" }}
                  >
                    <Stack
                      sx={{
                        backgroundImage: `url(${item?.sender?.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        height: 30,
                        width: 30,

                        borderRadius: 5,
                        zIndex: 0,
                      }}
                    ></Stack>
                  </StyledBadge>
                </Box>
              )}
              {/* msg */}

              <Stack
                sx={{
                  p: 1,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
                  background: item?.sender?.self ? "#1C63D5" : "white",
                  borderTopLeftRadius: item?.sender?.self ? 15 : 0,
                  borderBottomRightRadius: item?.sender?.self ? 0 : 15,
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
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
