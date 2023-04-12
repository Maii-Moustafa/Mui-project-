import Stack from "@mui/material/Stack";
import PortfolioCarousel from "../components/slider/PortfolioCarousel";
import OpenSocials from "../components/buttons/OpenSocials";

export default function Landing() {
  return (
    <>
      <Stack justifyContent="flex-end">
        <Stack direction="row" justifyContent="flex-end">
          <Stack
            
            style={{ position: "relative", width: "100%",height:"100vh", right: "auto" }}
          >
            <PortfolioCarousel />
          </Stack>
        </Stack>
        <Stack
          // direction="column"
          // justifyContent="flex-end"
          // alignItems="start "
          sx={{
            zIndex: 300,
            position: "absolute",
            top: "600",
            right: "50",
          }}
        >
          <OpenSocials />
        </Stack>
      </Stack>
    </>
  );
}
