import { Box, Stack } from "@mui/material";

export default function PaginationCarousel() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <Box
        sx={{
          width: "30px",
          height: "4px",
          backgroundColor: "grey",
          
        }}
      ></Box>
      <Box
        sx={{
          width: "30px",
          height: "4px",
          backgroundColor: "grey",
        }}
      ></Box>
      <Box
        sx={{
          width: "30px",
          height: "4px",
          backgroundColor: "grey",
        }}
      ></Box>
    </Stack>
  );
}
