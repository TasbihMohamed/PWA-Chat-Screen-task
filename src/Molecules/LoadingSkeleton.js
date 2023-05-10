import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

export default function LoadingSkeleton() {
  return (
    <Container maxWidth="lg">
      <Stack
        spacing={1}
        sx={{ m: 3, justifyContent: "center", alignItems: "center" }}
      >
        <Stack direction="row" gap={2}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={100} height={60} />
        </Stack>
        <Stack direction="row" gap={2}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={400} height={50} />
        </Stack>
        <Stack direction="row-reverse" gap={2}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={400} height={50} />
        </Stack>
        <Stack direction="row" gap={2}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={400} height={50} />
        </Stack>
      </Stack>
    </Container>
  );
}
