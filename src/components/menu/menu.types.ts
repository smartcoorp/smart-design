import { ButtonProps } from "../button/button.types";
export type MenuProps = {
  /** Content of the menu. */
  children: React.ReactNode;
  /** Trigger button component props */
  triggerProps?: ButtonProps;
  /** Trigger render text*/
  triggerText?: string;
};
