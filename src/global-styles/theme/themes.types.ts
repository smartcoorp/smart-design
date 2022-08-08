export interface ColorType {
  neutral: string;
  invertedNeutral: string;
}

export interface PrimaryButtonTypes {
  hoverBackgroundColor: string;
  disabledTextColor: string;
  disabledBackgroundColor: string;
}
export interface SecondaryButtonTypes {
  hoverBackgroundColor: string;
  disabledBorderColor: string;
  disabledTextColor: string;
}

export interface TextButtonTypes {
  disabledTextColor: string;
}

export interface FormFieldLabelTyes {
  textColor: string;
  disabledTextColor: string;
}
export interface FormFieldInputTypes {
  backgroundColor: string;
  hoverBackgroundColor: string;
  disabledBackgroundColor: string;
}

/** Menu item interface */
type MenuItem = {
  disabledTextColor: string;
  disabledBackgroundColor: string;
  hoverBackgroundColor: string;
};
type MenuDivider = {
  backgroundColor: string;
};
export interface Menu {
  backgroundColor: string;
  borderColor: string;
  menuItem: MenuItem;
  menuDivider: MenuDivider;
}
