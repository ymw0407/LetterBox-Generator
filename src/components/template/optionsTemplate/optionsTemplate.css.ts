import { style } from "@vanilla-extract/css";

export const optionsTemplate = style({
  display: "flex",

  flexWrap: "wrap",

  gap: "0.5rem",
  width: "100%",
});

export const option = style({
  width: "100%",
  minWidth: "18.75rem",

  boxSizing: "border-box",

  "@media": {
    "(max-width: 1000rem)": {
      width: "calc(50% - 0.5rem)",
    },
    "(max-width: 84rem)": {
      width: "100%",
    },
    "(max-width: 50rem)": {
      width: "calc(50% - 0.5rem)",
    },
    "(max-width: 42rem)": {
      width: "100%",
    },
  },
});

export const colorIconContainer = style({
  width: "1rem",
  height: "1rem",
});
