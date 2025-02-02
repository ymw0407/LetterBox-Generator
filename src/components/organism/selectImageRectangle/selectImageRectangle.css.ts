import { style } from "@vanilla-extract/css";

export const selectImageRectangle = style({
  width: "100%",
  height: "100%",
});

export const lottieContainer = style({
  position: "relative",
  bottom: "5%",

  height: "80%",
  aspectRatio: "1",

  flexShrink: 0,
});
