import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const carouselWrapper = style({
  position: "relative",

  width: "min(100%, 25rem)",
  height: "11rem",

  overflow: "hidden",
});

export const carouselList = style({
  display: "flex",

  width: "100%",
  height: "100%",

  transition: "transform 0.6s ease-out",
});

export const rectangleContainer = style({
  width: "100%",
  height: "100%",

  flexShrink: 0,

  userSelect: "none",
  pointerEvents: "none",

  transition: "all 0.3s ease-in-out",
});

export const carouselImage = style({
  position: "relative",
  top: "-100%",

  objectFit: "contain",
  objectPosition: "center",

  width: "100%",
  height: "100%",

  userSelect: "none",

  transition: "all 0.3s ease-in-out",
});

export const backCarousel = style({
  position: "absolute",
  top: "calc(50% - 0.75rem)",
  left: "0%",

  width: "1.5rem",

  ":hover": {
    transform: "scale(1.1)",
  },

  ":active": {
    transform: "scale(0.9)",
  },
});

export const forwardCarousel = style({
  position: "absolute",
  top: "calc(50% - 0.75rem)",
  right: "0%",

  width: "1.5rem",

  ":hover": {
    transform: "scale(1.1)",
  },

  ":active": {
    transform: "scale(0.9)",
  },
});

export const carouselDotList = style({
  position: "absolute",
  bottom: "5%",
  left: "calc(50% - min(75%, 20rem) / 2)",

  display: "flex",
  justifyContent: "space-evenly",

  height: "0.5rem",
  width: "min(75%, 20rem)",
});

export const carouselDot = style({
  width: "0.5rem",
  borderRadius: "50%",

  background: themeVars.color.neutral.grey[90],

  transition: "all 0.3s ease-in-out",
});

export const activateCarouselDot = style({
  width: "0.5rem",
  borderRadius: "50%",

  background: themeVars.color.neutral.grey[40],

  transition: "all 0.3s ease-in-out",
});
