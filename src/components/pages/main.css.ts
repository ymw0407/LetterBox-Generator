import { style } from "@vanilla-extract/css";

export const main = style({
  margin: "2rem",
});

export const generateButtonContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
});

export const gererateButton = style({
  alignItems: "center",

  "@media": {
    "(max-width: 1000rem)": {
      width: "calc(80%)",
    },
    "(max-width: 50rem)": {
      width: "calc(100%)",
    },
  },
});

export const imageOptionContainer = style({
  display: "flex",
  flexWrap: "wrap",

  gap: "2rem",

  width: "100%",

  marginTop: "2rem",
});

export const flexContainer = style({
  width: "100%",
  minWidth: "18.75rem",

  boxSizing: "border-box",

  "@media": {
    "(max-width: 1000rem)": {
      width: "calc(50% - 2rem)",
    },
    "(max-width: 50rem)": {
      width: "calc(100%)",
    },
  },
});
