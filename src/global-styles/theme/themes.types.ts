import { dropShadowS } from "../../tokens/shadow";
export interface ColorType {
  neutral: string;
  invertedNeutral: string;
}

/** shadows */
export interface Shadow {
  shadowS: string;
  shadowM: string;
  shadowL: string;
  shadowXL: string;
}

/** Common color effects */
export interface Common {
  disabledBackgroundColor: string;
  disabledSurfaceColor: string;
  overBackgroundNeutral: string;
  backgroundColor: string;
  errorColor: string;
}
export interface PrimaryButtonTypes {
  hoverBackgroundColor: string;
}
export interface SecondaryButtonTypes {
  hoverBackgroundColor: string;
}

/** Menu item interface */
type MenuItem = {
  hoverBackgroundColor: string;
};

export interface Menu {
  menuItem: MenuItem;
}

/** Select interface */
type SelectItem = {
  hoverBackgroundColor: string;
  focusBackgroundColor: string;
  selectedBackgroundColor: string;
  selectedHoverBackgroundColor: string;
};
export interface Select {
  selectItem: SelectItem;
}
