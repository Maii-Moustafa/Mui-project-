import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { gsap } from "gsap";
import SplitText from "gsap-trial/SplitText";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function PortfolioItem({ item }) {
  // gsap.registerPlugin(SplitText);
  // var split = new SplitText(".motiv01", { type: "chars" }),
  //   chars = split.chars;

  // gsap.from(chars, {
  //   autoAlpha: 0,
  //   x: -10,
  //   duration: 0.3,
  //   ease: "Power2.in",
  //   stagger: 0.1,
  //   delay: 1,
  // });

  // function change(){

  //   split = new SplitText(imgs[1], {type:"chars"});
  //   chars = split.chars;

  //   var action = gsap.timeline({})
  //   .to(imgs,  {x:'-=600', duration:1, ease:'power1.inOut'})
  //   .to(imgs[0], {x:'+=1800', duration:0}) // the first to the end
  //   .from(chars, {autoAlpha:0, x: -10, duration:0.3, ease: 'Power2.in', stagger:0.1}, 1.5);

  //   imgs.push( imgs.shift() ); // the first (shift) to the end (push) from the array

  //   // start endless run
  //   gsap.delayedCall(next, change);

  // }

  // // start the changing after next = 3 sec
  // gsap.delayedCall(next, change);
  return (
    <Paper>
      <Stack direction="row" justifyContent="flex-end">
        <img
          src={item.photo}
          style={{ position: "relative", width: "80%" }}
          alt=""
          // sx={{
          //   overflowClipMargin:"100px",
          // }}
        />
      </Stack>
      <Container
        style={{
          position: "absolute",
          zIndex: 20,
          top: "150px",
          right: "-40px",
          color: "white",
        }}
      >
        <Typography variant="h3">{item.category} </Typography>
        <Typography variant="h5" className="motiv01">
          {item.title}
        </Typography>

        <Typography variant="h6">{item.description}</Typography>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<ArrowForwardIosIcon />}
          style={{
            borderRadius: "50px",
            padding: "10px 25px",
            border: "1px solid white",
            color: "white",
          }}
        >
          View Case
        </Button>
      </Container>
    </Paper>
  );
}
