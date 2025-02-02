import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const errorToastContainer = style({
  position: "fixed",
  bottom: "1rem",
  right: "1rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "25rem",
  height: "5rem",

  borderRadius: "0.5rem",
  border: "1px",
  borderColor: themeVars.color.neutral.white,

  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

export const iconContainer = style({
  width: "5rem",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "0.5rem",

  backgroundColor: "#E02A28",
});

export const icon = style({
  width: "2rem",
  height: "2rem",

  backgroundColor: "#E02A28",
  color: "#FFFFFF",
});

export const messageContainer = style({
  width: "100%",
  height: "100%",

  paddingLeft: "1rem",
  paddingRight: "1rem",

  display: "flex",
  alignItems: "center",

  borderTopRightRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",

  backgroundColor: "#FFFFFF",
});

export const title = style({
  fontFamily: themeVars.font.family.pretendard,
  fontSize: "1rem",
  fontWeight: "800",

  marginBottom: "0.3rem",

  userSelect: "none",
});

export const description = style({
  fontFamily: themeVars.font.family.pretendard,
  fontSize: "0.9rem",
  fontWeight: "400",
  letterSpacing: "-1px",

  userSelect: "none",
});
