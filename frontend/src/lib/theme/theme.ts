"use client";

import { DefaultTheme } from "styled-components";

const colors = {
  white: "#ffffff",
  black: "#000000",
  green: {
    100: "#4CAF50",
    200: "#DFFFE8",
    300: "#2B9D3D",
  },
  gray: {
    100: "#C4C4C4",
    200: "#7F7F7F",
    300: "#353535",
    400: "#EFEFEF",
  },
  blue: {
    100: "#008CDB",
    200: "#F1F5F7",
  },
  pink: {
    100: "#FFDFF9",
    200: "#A65998"
  },
  orange: {
    100: "#FFE0BD",
    200: "#8E671C",
  }
};

const space = {
  s1: "4px",
  s2: "8px",
  s3: "12px",
  s4: "16px",
  s5: "24px",
  s6: "32px",
  s7: "40px",
  s8: "48px",
  s9: "56px",
  s10: "64px",
  s11: "72px",
  s12: "80px",
  s13: "88px",
  s14: "96px",
  s15: "102px",
};

export const theme: DefaultTheme = {
  colors,
  space,
};
