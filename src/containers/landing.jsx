import Stack from "@mui/material/Stack";
import PortfolioCarousel from "../components/old slider/PortfolioCarousel";
import OpenSocials from "../components/buttons/OpenSocials";

export default function Landing() {
  return (
    <>
      <Stack
        justifyContent="flex-end"
        sx={{ position: "relative", height: "100vh" }}
      >
        {/* <Stack direction="row" justifyContent="flex-end">
          <Stack
            
            style={{ position: "relative", width: "100%",height:"100vh", right: "auto" }}
          >
            <PortfolioCarousel />
          </Stack>
        </Stack> */}
        <PortfolioCarousel />

        <Stack
          sx={{
            zIndex: 300,
            position: "absolute",
            top: "500px",
            left: "80px",
          }}
        >
          <OpenSocials />
        </Stack>
      </Stack>
    </>
  );
}
