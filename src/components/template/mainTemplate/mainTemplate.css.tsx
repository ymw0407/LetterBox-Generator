import { style } from "@vanilla-extract/css";

export const titleContainer = style({
  marginBottom: "1rem",
});

export const imageConatiner = style({
  width: "100%",
  aspectRatio: "16/9",

  "@media": {
    "screen and (min-width: 576px)": {
      flex: "0 0 50%",
      width: "50%",
    },
  },
});
