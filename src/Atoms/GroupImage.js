import { Stack } from "@mui/material";

export default function GroupImage({ products }) {
 

  return (
    <Stack
      sx={{
        my: 1,
        borderRadius: 50,
        overflow: "hidden",
        //   height:200
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: 50,
          // overflow: "hidden",
        }}
      >
        <Stack sx={{  backgroundImage: `url(${products[0]?.sender?.image})` , backgroundRepeat: 'no-repeat',backgroundSize:'contain',height: 25, width: 25 }}></Stack>
        <Stack sx={{  backgroundImage: `url(${products[1]?.sender?.image})` , backgroundRepeat: 'no-repeat',backgroundSize:'contain',height: 25, width: 25 }}></Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: 50,
          // overflow: "hidden",
        }}
      >
        <Stack sx={{  backgroundImage: `url(${products[3]?.sender?.image})` , backgroundRepeat: 'no-repeat',backgroundSize:'contain',height: 25, width: 25 }}></Stack>
        <Stack sx={{  backgroundImage: `url(${products[4]?.sender?.image})` , backgroundRepeat: 'no-repeat',backgroundSize:'contain',height: 25, width: 25 }}></Stack>
      </Stack>
    </Stack>
  );
}
