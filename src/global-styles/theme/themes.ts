import { DefaultTheme } from "styled-components";
import {
  gray100,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  gray700,
  gray800,
  gray900,
  primary400,
  primary600,
  red,
  darkRed,
} from "@tokens";

import * as I from "./themes.types";

declare module "styled-components" {
  export interface DefaultTheme {
    color: I.ColorType;
    backgroundScreen: string;
    typography: {
      bodyTextColor: string;
      headlineTextColor: string;
      heroTextColor: string;
      captionTextColor: string;
    };
    button: {
      primary: I.PrimaryButtonTypes;
      secondary: I.SecondaryButtonTypes;
      text: I.TextButtonTypes;
    };
    dotLoading: {
      disabledColor: string;
    };
    formField: {
      filledBorderColor: string;
      errorColor: string;
      label: I.FormFieldLabelTyes;
      input: I.FormFieldInputTypes;
    };
    menu: I.Menu;
  }
}

export const lightTheme: DefaultTheme = {
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
  dotLoading: {
    disabledColor: gray400,
  },
  button: {
    primary: {
      hoverBackgroundColor: primary600,
      disabledTextColor: gray400,
      disabledBackgroundColor: gray300,
    },
    secondary: {
      hoverBackgroundColor: gray200,
      disabledTextColor: gray400,
      disabledBorderColor: gray300,
    },
    text: {
      disabledTextColor: gray400,
    },
  },

  formField: {
    filledBorderColor: gray500,
    errorColor: red,
    label: {
      textColor: gray500,
      disabledTextColor: gray800,
    },
    input: {
      backgroundColor: gray200,
      hoverBackgroundColor: gray300,
      disabledBackgroundColor: gray500,
    },
  },
  menu: {
    backgroundColor: "white",
    borderColor: gray100,

    menuItem: {
      hoverBackgroundColor: gray100,
      disabledTextColor: gray400,
      disabledBackgroundColor: gray300,
    },
    menuDivider: {
      backgroundColor: gray300,
    },
  },
};

export const darkTheme: DefaultTheme = {
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
  dotLoading: {
    disabledColor: gray400,
  },
  button: {
    primary: {
      hoverBackgroundColor: primary400,
      disabledTextColor: gray400,
      disabledBackgroundColor: gray600,
    },
    secondary: {
      hoverBackgroundColor: gray600,
      disabledTextColor: gray400,
      disabledBorderColor: gray600,
    },
    text: {
      disabledTextColor: gray400,
    },
  },

  formField: {
    filledBorderColor: gray300,
    errorColor: darkRed,

    label: {
      textColor: gray300,
      disabledTextColor: gray800,
    },
    input: {
      backgroundColor: gray700,
      hoverBackgroundColor: gray600,
      disabledBackgroundColor: gray500,
    },
  },
  menu: {
    backgroundColor: gray800,
    borderColor: gray700,
    menuItem: {
      hoverBackgroundColor: gray700,
      disabledTextColor: gray400,
      disabledBackgroundColor: gray600,
    },
    menuDivider: {
      backgroundColor: gray600,
    },
  },
};
