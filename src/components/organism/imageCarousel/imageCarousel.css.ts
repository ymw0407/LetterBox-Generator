import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const carouselWrapper = style({
  position: "relative",

  width: "100%",
  height: "100%",

  overflow: "hidden",

  border: `solid 2px ${themeVars.color.primary[60]}`,
  borderRadius: "0.625rem",
});

export const carouselList = style({
  display: "flex",

  width: "100%",
  height: "100%",

  transition: "transform 0.6s ease-out",
});

export const rectangleContainer = style({
  position: "relative",

  width: "100%",
  height: "100%",

  flexShrink: 0,

  userSelect: "none",
  pointerEvents: "none",

  transition: "all 0.3s ease-in-out",
});

export const carouselImage = style({
  // position: "relative",
  // left: "-100%",

  // position: "absolute",
  // top: 0,

  objectFit: "contain",
  objectPosition: "center",

  userSelect: "none",

  transition: "transform 0.3s ease-in-out",

  zIndex: 2,
});

export const backCarousel = style({
  position: "absolute",
  top: "calc(50% - 0.75rem)",
  left: "0%",

  width: "2rem",
  height: "2rem",

  filter: "invert(100%)",
  // mixBlendMode: "hard-light",

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

  width: "2rem",
  height: "2rem",

  filter: "invert(100%)",
  // mixBlendMode: "hard-light",

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

  height: "0.75rem",
  width: "min(75%, 20rem)",
});

export const carouselDot = style({
  width: "0.75rem",
  borderRadius: "50%",

  background: themeVars.color.neutral.grey[90],

  transition: "all 0.3s ease-in-out",
});

export const activateCarouselDot = style({
  width: "0.75rem",
  borderRadius: "50%",

  background: themeVars.color.neutral.grey[40],

  transition: "all 0.3s ease-in-out",
});
