import { ring } from "@styles";
import {
  borderRadiusXXS,
  motionEasingEnter,
  motionTimeM,
  primary,
  scale060,
  scale070,
  scale080,
  scale090,
  scale100,
  spaceM,
  mediaConfined,
  mediaWide,
} from "@tokens";
import styled, { css } from "styled-components";
import { Body } from "../body";
import { CheckboxSizes } from "./checkbox.types";

type CheckboxTransientProps = {
  $checked: boolean | "mixed";
  $disabled?: boolean;
  $noMargin?: boolean;
  $size?: CheckboxSizes;
  $sizeConfined?: CheckboxSizes;
  $sizeWide?: CheckboxSizes;
};

type CheckboxLabelTransientProps = {
  $disabled?: boolean;
};

//*** Sizes ***
export const sizes = {
  xsmall: css`
    width: ${scale060};
    height: ${scale060};
  `,
  small: css`
    width: ${scale070};
    height: ${scale070};
  `,
  medium: css`
    width: ${scale080};
    height: ${scale080};
  `,
  large: css`
    width: ${scale090};
    height: ${scale090};
  `,
  xlarge: css`
    width: ${scale100};
    height: ${scale100};
  `,
};

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const selectedCheckbox = css`
  border-color: ${primary};
  color: ${({ theme }) => theme.color.neutral};
  background-color: ${primary};
`;

const disabledCheckedCheckbox = css`
  border-color: ${({ theme }) => theme.common.disabledSurfaceColor};
  color: ${({ theme }) => theme.common.disabledSurfaceColor};
  background-color: ${({ theme }) => theme.common.backgroundColor};
  pointer-events: none;
`;

const disabledUncheckedCheckbox = css`
  border-color: ${({ theme }) => theme.common.disabledSurfaceColor};
  color: ${({ theme }) => theme.common.disabledSurfaceColor};
  pointer-events: none;
`;

const Checkbox = styled.div<CheckboxTransientProps>`
  border: 2px solid ${({ theme }) => theme.color.neutral};
  border-radius: ${borderRadiusXXS};
  margin-right: ${({ $noMargin }) => !$noMargin && spaceM};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: box-shadow ${motionTimeM} ${motionEasingEnter};

  cursor: pointer;

  &:focus-visible {
    ${({ theme }) => ring({ color: primary, offsetColor: theme.backgroundScreen })}
  }

  ${({ $size }) => $size && sizes[$size]}
  ${({ $checked }) => ($checked === true || $checked === "mixed") && selectedCheckbox}
  ${({ $disabled, $checked }) => $disabled && $checked && disabledCheckedCheckbox}
${({ $disabled, $checked }) => $disabled && !$checked && disabledUncheckedCheckbox}


  ${({ $sizeConfined }) =>
    $sizeConfined &&
    css`
      @media ${mediaConfined} {
        ${sizes[$sizeConfined]}
      }
    `};

  ${({ $sizeWide }) =>
    $sizeWide &&
    css`
      @media ${mediaWide} {
        ${sizes[$sizeWide]}
      }
    `};
`;

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`;

const disabledLabel = css`
  pointer-events: none;
`;
const CheckboxLabel = styled(Body)<CheckboxLabelTransientProps>`
  cursor: pointer;
  color: ${({ theme, $disabled }) => $disabled && theme.common.disabledSurfaceColor};

  ${({ $disabled }) => $disabled && disabledLabel};
`;

export const Styled = {
  HiddenCheckbox,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
};
