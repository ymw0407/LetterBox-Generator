import { themeVars } from "@styles/theme/themeContract.css";
import { keyframes, style } from "@vanilla-extract/css";

export const brandIcon = style({
  width: "0.75rem",
  height: "0.75rem",
  flexShrink: 0,

  marginRight: "0.25rem",

  userSelect: "none",
});

export const selectorList = style({});

export const selectorContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",

  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",

  border: `solid 1px ${themeVars.color.primary[80]}`,
  borderCollapse: "collapse",
  boxSizing: "border-box",
  margin: "-1px",

  cursor: "pointer",

  ":hover": {
    backgroundColor: themeVars.color.primary[90],
  },
});

export const selectedSelectorContainer = style([
  selectorContainer,
  {
    backgroundColor: themeVars.color.primary[100],
  },
]);

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeInClass = style({
  animation: `${fadeIn} 1s ease-in-out forwards`,
});
