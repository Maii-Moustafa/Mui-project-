import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";

import Image from "../Image";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import { Container, Stack } from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import FooterText from "./FooterText";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", marginTop: "8rem" }} component="section">
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "80px", paddingBottom: "40px" }}
        >
          <Grid xs={12} md={6} lg={3}>
            <Image src="../src/assets/logo.png" style={{ width: "30%" }} />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              sx={{
                marginTop: "1.5rem",
              }}
            >
              <IconButton
                aria-label="Facebook Outlined Icon"
                sx={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "45px",
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: theme.palette.mode === "dark" ? "grey" : "black",
                  color: "black",
                  transition: "rotate 0.5s",

                  "&:hover": {
                    // backgroundColor: "black",
                    color: "white",
                    rotate: "360deg",
                  },
                }}
              >
                <FacebookOutlinedIcon
                  sx={{
                    fontSize: "1.1rem",
                    color: theme.palette.mode === "dark" ? "white" : "black",
                  }}
                />
              </IconButton>
              <IconButton
                aria-label="Twitter Icon"
                sx={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "45px",
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: theme.palette.mode === "dark" ? "grey" : "black",
                  color: "black",
                  transition: "rotate 0.5s",

                  "&:hover": {
                    // backgroundColor: "black",
                    color: "white",
                    rotate: "360deg",
                  },
                }}
              >
                <TwitterIcon
                  sx={{
                    fontSize: "1.1rem",
                    color: theme.palette.mode === "dark" ? "white" : "black",
                  }}
                />
              </IconButton>
              <IconButton
                aria-label="Linked Camera Outlined Icon"
                sx={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "45px",
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: theme.palette.mode === "dark" ? "grey" : "black",
                  color: "black",
                  transition: "rotate 0.5s",

                  "&:hover": {
                    // backgroundColor: "black",
                    color: "white",
                    rotate: "360deg",
                  },
                }}
              >
                <LinkedCameraOutlinedIcon
                  sx={{
                    fontSize: "1.1rem",
                    color: theme.palette.mode === "dark" ? "white" : "black",
                  }}
                />
              </IconButton>
            </Stack>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <>
              <FooterTitle footerTitle="navigation" />

              <FooterLink link="portfolio" variant="a" />
              <FooterLink link="about" variant="a" />
              <FooterLink link="news" variant="a" />
              <FooterLink link="contacts" variant="a" />
            </>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <>
              <FooterTitle footerTitle="address" />

              <FooterText link="T : +001 225 3351" variant="span" />
              <FooterText link="F : +001 225 3351" variant="span" />
              <FooterText link="E : INFO@DSNGRID.COM" variant="span" />
            </>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <>
              <FooterTitle footerTitle="contact" />
              <FooterText link="EL-MAHALLA EL-KUBRA 37" variant="span" />
              <FooterText link="1776 DAMIETTA" variant="span" />
              <FooterText link="EGYPT" variant="span" />
            </>
          </Grid>
        </Grid>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "40px" }}
        >
          <Divider
            sx={{
              width: "100%",
            }}
          />
          <Typography
            sx={{
              marginTop: "40px",
              marginBottom: "0.6rem",
              textAlign: "center",
              lineHeight: "1.2",
              letterSpacing: "3px",
              fontSize: "16px",
            }}
          >
            &#169; 2023 DROOW DIGITAL AGENCY
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "inline-block",
              textAlign: "center",
              letterSpacing: "3px",
              fontSize: "14px",
            }}
          >
            Designed by
            <Typography
              variant="span"
              sx={{
                color: "#a56433",
                marginLeft: "5px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              DSN GRID
            </Typography>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
