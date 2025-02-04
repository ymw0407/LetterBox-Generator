import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const loadingModalContainer = style({
  position: "fixed",
  top: 0,
  left: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  backdropFilter: "blur(5px)",
});

export const loadingModal = style({
  width: "60vw",
  height: "45vw",

  padding: "2vw",

  "@media": {
    "(max-width: 800rem)": {
      width: "40vw",
      height: "30vw",
    },
    "(max-width: 800px)": {
      width: "60vw",
      height: "45vw",
    },
  },

  borderRadius: "1vw",

  backgroundColor: themeVars.color.neutral.white,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

export const loadingComment = style({
  width: "22ch",

  fontFamily: themeVars.font.family.pretendard,
  fontWeight: 700,

  "@media": {
    "(max-width: 800rem)": {
      fontSize: "2vw",
    },
    "(max-width: 800px)": {
      fontSize: "3vw",
    },
  },
});

export const completeTitle = style({
  textAlign: "center",
  fontFamily: themeVars.font.family.pretendard,
  fontWeight: 900,

  "@media": {
    "(max-width: 800rem)": {
      fontSize: "3vw",
    },
    "(max-width: 800px)": {
      fontSize: "4vw",
    },
  },

  userSelect: "none",
});

export const completeDescription = style({
  textAlign: "center",
  fontFamily: themeVars.font.family.pretendard,
  fontWeight: 700,

  "@media": {
    "(max-width: 800rem)": {
      fontSize: "2vw",
    },
    "(max-width: 800px)": {
      fontSize: "2.5vw",
    },
  },

  userSelect: "none",
});

export const button = style({
  border: `solid 1px ${themeVars.color.primary[70]}`,
  borderRadius: "0.5rem",

  width: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: themeVars.color.neutral.white,
  color: themeVars.color.primary[40],

  cursor: "pointer",

  ":hover": {
    background: `linear-gradient(to right, 
    ${themeVars.color.primary[30]} 0%, 
    ${themeVars.color.primary[60]} 100%)`,

    color: themeVars.color.neutral.white,
  },

  ":active": {
    filter: "brightness(90%)",
    color: themeVars.color.neutral.white,
  },

  "@media": {
    "(max-width: 800rem)": {
      height: "3.5vw",
    },
    "(max-width: 800px)": {
      height: "5vw",
    },
  },
});

export const text = style({
  fontFamily: themeVars.font.family.pretendard,
  fontWeight: 700,

  textAlign: "center",
  fontSize: "",

  userSelect: "none",

  "@media": {
    "(max-width: 800rem)": {
      fontSize: "2.5vw",
    },
    "(max-width: 800px)": {
      fontSize: "3vw",
    },
  },
});
