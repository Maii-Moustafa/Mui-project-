import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Image from "./Image";
import NavTitle from "./titles/NavTitle";
import FooterLink from "../FooterLink";

export default function Footer() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ paddingTop: "80px", paddingBottom: "40px" }}
      >
        <Grid xs={3}>
          <Image src="../src/assets/logo.png" style={{ width: "50%" }} />
        </Grid>
        <Grid xs={3}>
          <>
            <NavTitle navTitle="navigation" />

            <FooterLink link="portfolio" variant="a" />
            <FooterLink link="about" variant="a" />
            <FooterLink link="news" variant="a" />
            <FooterLink link="contacts" variant="a" />
          </>
        </Grid>
        <Grid xs={3}>
          <>
            <NavTitle navTitle="address" />
            <FooterLink link="T : +001 225 3351" variant="span" />
            <FooterLink link="F : +001 225 3351" variant="span" />
            <FooterLink link="E : INFO@DSNGRID.COM" variant="span" />
          </>
        </Grid>
        <Grid xs={3}>
          <>
            <NavTitle navTitle="contact" />
            <FooterLink link="EL-MAHALLA EL-KUBRA 37" variant="span" />
            <FooterLink link="1776 DAMIETTA" variant="span" />
            <FooterLink link="EGYPT" variant="span" />
          </>
        </Grid>
      </Grid>
      <Divider
        sx={{
          width: "30px",
        }}
      />
      <Paper>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          2023 DROOW DIGITAL AGENCY
        </Typography>
        <Typography
          variant="p"
          sx={{
            display: "inline-block",
            textAlign: "center",
          }}
        >
          Designed by
          <Typography
            variant="span"
            sx={{
              color: "#a56433",
            }}
          >
            DSN GRID
          </Typography>
        </Typography>
      </Paper>
    </>
  );
}
