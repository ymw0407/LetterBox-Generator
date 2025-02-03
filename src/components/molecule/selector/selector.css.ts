import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const titleConatiner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "6rem",
  height: "2.5rem",
  borderRadius: "4px",

  flexShrink: 0,
  backgroundColor: themeVars.color.primary[80],
});

export const title = style({
  color: themeVars.color.neutral.white,
  textAlign: "center",
  fontFamily: themeVars.font.family.pretendard,
  fontSize: "0.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",

  userSelect: "none",
});

export const valueContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "1rem",
  marginRight: "1rem",

  width: "100%",
  height: "100%",

  cursor: "pointer",

  userSelect: "none",
});

export const selector = style({
  display: "flex",
  alignItems: "center",
  alignContent: "center",

  width: "100%",
  height: "2.5rem",

  border: `solid 1px ${themeVars.color.primary[80]}`,

  borderRadius: "4px",
});

export const downIcon = style({
  width: "1rem",
  height: "1rem",
  flexShrink: 0,

  transition: "transform 0.3s",

  userSelect: "none",
});

export const upIcon = style({
  width: "1rem",
  height: "1rem",
  flexShrink: 0,

  transform: "rotate(-180deg)",
  transition: "transform 0.3s",

  userSelect: "none",
});

export const selectorContainer = style({});

export const selectorListConatiner = style({
  marginTop: "0.25rem",
  transition: "all 0.3s",
});
