import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

import Stack from "@mui/material/Stack";
import Carousel from "react-material-ui-carousel";
import PortfolioItem from "./PortfolioItem";

import slider from "./slider.json";

import ShowSocials from "../buttons/OpenSocials";

function PortfolioCarousel() {
  // useEffect(() => {

  //   const divs = document.querySelectorAll(".testemonial");
  //   gsap.set(divs[1], { x: 100, opacity: 1 });

  //   gsap
  //     .timeline({ repeat: -1, defaults: { duration: 3 } })
  //     .add("one")
  //     .to(divs[0], { y: 150, x: 0, opacity: 0.05 }, "one")
  //     .to(divs[1], { y: -75, x: 0, opacity: 0.05 }, "one")
  //     .to(divs[2], { y: -85, x: 100, opacity: 1 }, "one")

  //     .add("two")
  //     .to(divs[0], { y: 75, x: 100, opacity: 1 }, "two")
  //     .to(divs[1], { y: 75, x: 0, opacity: 0.05 }, "two")
  //     .to(divs[2], { y: -150, x: 0, opacity: 0.05 }, "two")

  //     .add("three")
  //     .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "three")
  //     .to(divs[1], { y: 0, x: 0, opacity: 1 }, "three")
  //     .to(divs[2], { y: 0, x: 0, opacity: 0.05 }, "three");
  // });

  // const div = document.querySelectorAll('.testemonial');
  // const divArr = Array.prototype.slice.call(div);
  // gsap.utils.toArray("divArr").forEach((el, i) => {
  //   const tl = gsap.timeline({ paused: true, reversed: true });
  //   tl.to(el, {
  //     width: "400px",
  //     duration: 1,
  //   });

  //   el.addEventListener("click", function () {
  //     if (tl.reversed()) {
  //       tl.play();
  //     } else {
  //       tl.reverse();
  //     }
  //   });
  // });

  // const divs = document.querySelectorAll(".testemonial");
  // gsap.set(divs[1], { x: 100, opacity: 1 });

  // gsap
  //   .timeline({ repeat: -1, defaults: { duration: 3 } })
  //   .add("one")
  //   .to(divs[0], { y: 150, x: 0, opacity: 0.05 }, "one")
  //   .to(divs[1], { y: -75, x: 0, opacity: 0.05 }, "one")
  //   .to(divs[2], { y: -85, x: 100, opacity: 1 }, "one")

  //   .add("two")
  //   .to(divs[0], { y: 75, x: 100, opacity: 1 }, "two")
  //   .to(divs[1], { y: 75, x: 0, opacity: 0.05 }, "two")
  //   .to(divs[2], { y: -150, x: 0, opacity: 0.05 }, "two")

  //   .add("three")
  //   .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "three")
  //   .to(divs[1], { y: 0, x: 0, opacity: 1 }, "three")
  //   .to(divs[2], { y: 0, x: 0, opacity: 0.05 }, "three");

  return (
    <>
      <Carousel
        swipe="true"
        //   next={(next, active) =>
        //     console.log(`we left ${active}, and are now at ${next}`)
        //   }
        //   prev={(prev, active) =>
        //     console.log(`we left ${active}, and are now at ${prev}`)
        //   }
        //   NextIcon=
        //   PrevIcon=

        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "cornflowerblue",
            borderRadius: 0,
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            bottom: "0",
            // top: "unset",
            // zIndex: 70,
            // position: "absolute",
            // bottom: "-215px",
            // right: "71px",
            // backgroundColor: "none",
          },
        }}
        IndicatorIcon={slider.map((item, i) => (
          <div className="testemonial">
            <img style={{ width: "150px" }} key={item.id} src={item.photo} />
          </div>
        ))}
        indicatorIconButtonProps={{
          style: {
            width: "60px",
            height: "20px",
            marginTop: "80px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            zIndex: 50,
            transition: "200px 2s",
            "img:hover": {
              width: "200px",
            },
          },
        }}
        indicatorContainerProps={{
          style: {
            display: "flex",
            flexDirection: "column",
            position: "absolute",

            zIndex: 500,
            top: "100px",
            // right: "300px",
          },
        }}
      >
        {slider.map((item, i) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </Carousel>
    </>
  );
}

export default PortfolioCarousel;
