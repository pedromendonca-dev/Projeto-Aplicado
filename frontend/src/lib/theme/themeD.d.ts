import "styled-components";

import { theme } from "./theme";

type Theme = typeof theme;

interface ThemeColors {
  white: string;
  black: string;
  green: {
    "100": string;
    "200": string;
    "300": string;
  };
  gray: {
    "100": string;
    "200": string;
    "300": string;
  };
  blue: {
    "100": string;
    "200": string;
  };
  pink: {
    "100": string;
    "200": string;
  };
  orange: {
    "100": string;
    "200": string;
  }
}

interface ThemeSpace {
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
  s6: string;
  s7: string;
  s8: string;
  s9: string;
  s10: string;
  s11: string;
  s12: string;
  s13: string;
  s14: string;
  s15: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: ThemeColors;
    space: ThemeSpace;
  }
}
