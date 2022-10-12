import { sizes, Styled } from "./checkbox.styles";

export type Checked = boolean | "mixed";
export type CheckboxSizes = keyof typeof sizes;

export type CheckboxProps = React.ComponentProps<typeof Styled.HiddenCheckbox> &
  LabelProps & {
    /** Add custom css to checkbox */
    className?: string;
    /** Is checkbox checked */
    checked: Checked;
    /** Is checkbox disabled */
    disabled?: boolean;
    /** Remove margin right from the checkbox*/
    noMargin?: boolean;
    /** The size on mobile screens or larger */
    size?: CheckboxSizes;
    /** The size on tablet screens or larger */
    sizeConfined?: CheckboxSizes;
    /** The size on desktop screens or larger */
    sizeWide?: CheckboxSizes;
    /** @callback */
    onChange: Function;
  };

type LabelProps =
  | {
      /** Checkbox label */
      label: string;
      /** Checkbox description in case no label is provided */
      checkboxDescription?: string;
    }
  | {
      label?: string;
      checkboxDescription: string;
    };
