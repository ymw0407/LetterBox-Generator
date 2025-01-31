import { style } from "@vanilla-extract/css";

export const transparentRectangle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  borderRadius: "0.625rem",

  objectFit: "cover",
  objectPosition: "center",

  userSelect: "none",
});
