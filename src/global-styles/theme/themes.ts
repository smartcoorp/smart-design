import { DefaultTheme } from "styled-components";
import {
  gray100,
  gray200,
  gray300,
  gray400,
  gray600,
  gray700,
  gray800,
  gray900,
  primary400,
  primary600,
  dropShadowS,
  dropShadowM,
  dropShadowL,
  dropShadowXL,
  dropShadowDarkS,
  dropShadowDarkM,
  dropShadowDarkL,
  dropShadowDarkXL,
  primary100,
  primary200,
  primary700,
  primary800,
  red400,
  red500,
  gray900_RGBA,
  gray800_RGBA,
} from "@tokens";

import * as I from "./themes.types";

declare module "styled-components" {
  export interface DefaultTheme {
    color: I.ColorType;
    backgroundScreen: string;
    common: I.Common;
    shadow: I.Shadow;

    typography: {
      bodyTextColor: string;
      headlineTextColor: string;
      heroTextColor: string;
      captionTextColor: string;
    };
    button: {
      primary: I.PrimaryButtonTypes;
      secondary: I.SecondaryButtonTypes;
    };

    menu: I.Menu;
    select: I.Select;
    modal: I.Modal;
  }
}

export const lightTheme: DefaultTheme = {
  common: {
    disabledBackgroundColor: gray200,
    backgroundColor: gray200,
    disabledSurfaceColor: gray300,
    overBackgroundNeutral: gray400,
    errorColor: red500,
  },
  shadow: {
    shadowS: dropShadowS,
    shadowM: dropShadowM,
    shadowL: dropShadowL,
    shadowXL: dropShadowXL,
  },
  color: {
    neutral: "black",
    invertedNeutral: "white",
  },
  backgroundScreen: "white",

  typography: {
    bodyTextColor: "black",
    headlineTextColor: "black",
    heroTextColor: "black",
    captionTextColor: gray700,
  },

  button: {
    primary: {
      hoverBackgroundColor: primary600,
    },
    secondary: {
      hoverBackgroundColor: gray200,
    },
  },

  menu: {
    menuItem: {
      hoverBackgroundColor: gray200,
    },
  },

  select: {
    selectItem: {
      hoverBackgroundColor: gray200,
      focusBackgroundColor: gray300,
      selectedBackgroundColor: primary100,
      selectedHoverBackgroundColor: primary200,
    },
  },

  modal: {
    backgroundColor: `rgba(${gray900_RGBA}, 0.75)`,
  },
};

export const darkTheme: DefaultTheme = {
  common: {
    disabledBackgroundColor: gray800,
    backgroundColor: gray700,
    disabledSurfaceColor: gray600,
    overBackgroundNeutral: gray400,
    errorColor: red400,
  },
  shadow: {
    shadowS: dropShadowDarkS,
    shadowM: dropShadowDarkM,
    shadowL: dropShadowDarkL,
    shadowXL: dropShadowDarkXL,
  },
  color: {
    neutral: "white",
    invertedNeutral: "black",
  },
  backgroundScreen: gray900,
  typography: {
    bodyTextColor: gray100,
    headlineTextColor: "white",
    heroTextColor: "white",
    captionTextColor: gray300,
  },

  button: {
    primary: {
      hoverBackgroundColor: primary400,
    },
    secondary: {
      hoverBackgroundColor: gray800,
    },
  },

  menu: {
    menuItem: {
      hoverBackgroundColor: gray700,
    },
  },
  select: {
    selectItem: {
      hoverBackgroundColor: gray700,
      focusBackgroundColor: gray600,
      selectedBackgroundColor: primary800,
      selectedHoverBackgroundColor: primary700,
    },
  },

  modal: {
    backgroundColor: `rgba(${gray800_RGBA}, 0.80)`,
  },
};
