import styled, { css } from "styled-components";

import { FormFieldSize, FormFieldVariant } from "./form-field.types";

import { Caption } from "../caption";

import {
  borderRadiusS,
  motionEasingEnter,
  motionTimeM,
  scale060,
  scale070,
  scale080,
  scale100,
  scale140,
  scale150,
  scale160,
  scale170,
  scale005,
  scale110,
  scale130,
  scale230,
  scale260,
  spaceM,
  spaceXL,
  mediaConfined,
  mediaWide,
  red,
} from "@tokens";

type TextareaTransientProps = {
  $error?: boolean;
  $isDisabled?: boolean;
  $hasFocus: boolean;
  $isFilled: boolean;
  $size?: FormFieldSize;
  $sizeConfined?: FormFieldSize;
  $sizeWide?: FormFieldSize;
  $success?: boolean;
};

type InputTransientProps = {
  $error?: boolean;
  $hasAction?: boolean;
  $iconSize?: 18 | 24;
  $isDisabled?: boolean;
  $isFilled: boolean;
  $hasFocus: boolean;
  $isIconSet?: boolean;
  $size: FormFieldSize;
  $sizeConfined?: FormFieldSize;
  $sizeWide?: FormFieldSize;
  $success?: boolean;
  $variant?: FormFieldVariant;
};

type LabelTransientProps = {
  $hasFocus: boolean;
  $isDisabled?: boolean;
  $isFilled: boolean;
  $isIconSet?: boolean;
  $multiline?: boolean;
  $error?: boolean;
  $size: FormFieldSize;
  $sizeConfined?: FormFieldSize;
  $sizeWide?: FormFieldSize;
};

type IconTransientProps = {
  $hasFocus: boolean;
  $isDisabled?: boolean;
  $isFilled: boolean;
};

export const variants = {
  primary: {
    small: css`
      padding-right: ${scale070};
    `,
    medium: css`
      padding-right: ${scale070};
    `,
    large: css`
      padding-right: ${scale080};
    `,
  },
  password: {
    small: css`
      padding-right: ${scale140};
    `,
    medium: css`
      padding-right: ${scale140};
    `,
    large: css`
      padding-right: ${scale150};
    `,
  },
};

export const sizes = {
  small: {
    input: css`
      font-size: ${scale070};
      height: ${scale150};
      min-width: ${scale260};
      padding-left: ${scale070};
    `,
    label: css`
      font-size: ${scale070};
    `,
  },
  medium: {
    input: css`
      font-size: ${scale080};
      height: ${scale160};
      min-width: ${scale260};
      padding-left: ${scale070};
    `,
    label: css`
      font-size: ${scale080};
    `,
  },
  large: {
    input: css`
      font-size: ${scale100};
      height: ${scale170};
      min-width: ${scale260};
      padding-left: ${scale080};
    `,
    label: css`
      font-size: ${scale080};
    `,
  },
};

const inputHasIcon = {
  small: css`
    padding-left: ${scale130};
  `,

  medium: css`
    padding-left: ${scale140};
  `,

  large: css`
    padding-left: ${scale140};
  `,
};

const borderWidth = scale005;

/* Label styles  */
const baseLabel = (multiline?: boolean) => css`
  position: absolute;
  top: ${multiline ? spaceXL : "50%"};
  left: ${scale070};
  transform: translateY(-50%);

  cursor: text;

  transition-property: top, left, padding, color, font-size;
  transition-timing-function: ${motionEasingEnter};
  transition-duration: ${motionTimeM};

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: ${borderWidth};
    height: 80%;

    transform-origin: top;

    transform: scaleY(0) translateY(-50%);
    transition-property: transform, background-color, top, left;
    transition-timing-function: ${motionEasingEnter};
    transition-duration: 0ms;
    transition-delay: 0ms;
  }

  &::after {
    right: 0px;
    top: 50%;
  }
  &::before {
    left: 0px;
    top: 50%;
  }
`;

const stateLabel = {
  enabled: css`
    color: ${({ theme }) => theme.formField.label.textColor};
  `,
  disabled: css`
    color: ${({ theme }) => theme.formField.label.disabledTextColor};

    cursor: not-allowed;
  `,
};

const labelHasIcon = {
  small: css`
    left: calc(${scale070} + ${scale100});
  `,

  medium: css`
    left: calc(${scale070} + ${scale110});
  `,

  large: css`
    left: calc(${scale070} + ${scale110});
  `,
};
const filledLabel = ($error?: boolean) => css`
  font-size: ${scale060};
  top: calc(${borderWidth} / 2);
  left: calc(${scale070} + ${borderWidth});
  padding: 0 10px;

  background-color: ${({ theme }) => theme.backgroundScreen};
  color: ${({ theme }) =>
    $error ? theme.formField.errorColor : theme.formField.filledBorderColor} !important;

  transition-delay: 0ms;

  &::after,
  &::before {
    background-color: ${({ theme }) =>
      $error ? theme.formField.errorColor : theme.formField.filledBorderColor};

    transform: scaleY(1) translateY(-50%);
    transition-duration: ${motionTimeM};

    transition-delay: ${motionTimeM};
  }
`;

/* Input styles */
const baseInput = css`
  width: 100%;
  border: none;
  outline: none;
  border-radius: ${borderRadiusS};

  color: ${({ theme }) => theme.color.neutral};
`;

const stateInput = {
  enabled: css`
    background-color: ${({ theme }) => theme.formField.input.backgroundColor};
    &:hover {
      background-color: ${({ theme }) => theme.formField.input.hoverBackgroundColor};
    }
  `,
  disabled: css`
    background-color: ${({ theme }) => theme.formField.input.disabledBackgroundColor};
    cursor: not-allowed;
  `,
};

const filledInput = ($error?: boolean) => css`
  border: ${borderWidth} solid ${({ theme }) => ($error ? red : theme.formField.filledBorderColor)} !important;
  background-color: ${({ theme }) => theme.backgroundScreen} !important;
  transition-delay: 0ms;

  &:hover {
    background-color: inherit;
  }
`;

/** Icon styles */
const baseIcon = (filled?: boolean) => css`
  color: ${({ theme }) => (filled ? theme.color.neutral : theme.formField.label.textColor)};

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: calc(${spaceM});
  transform: translateY(-50%);
`;

const FormFieldContainer = styled.div`
  position: relative;
  width: 400px;
`;

const Input = styled.input<InputTransientProps>`
  ${baseInput}
  ${({ $size }) => $size && sizes[$size].input}
  ${({ $size, $isIconSet }) => $isIconSet && inputHasIcon[$size]}
  ${({ $size, $variant }) => $variant && variants[$variant][$size]}

  ${({ $isFilled, $hasFocus, $error }) => ($isFilled || $hasFocus) && filledInput($error)}
  ${({ $isDisabled }) => ($isDisabled ? stateInput.disabled : stateInput.enabled)}

  ${({ $sizeConfined, $isIconSet, $variant }) =>
    $sizeConfined &&
    css`
      @media ${mediaConfined} {
        ${$sizeConfined && sizes[$sizeConfined].input}
        ${$variant && variants[$variant][$sizeConfined]}
        ${$isIconSet && inputHasIcon[$sizeConfined]}
      }
    `};

  ${({ $sizeWide, $isIconSet, $variant }) =>
    $sizeWide &&
    css`
      @media ${mediaWide} {
        ${$sizeWide && sizes[$sizeWide].input}
        ${$variant && variants[$variant][$sizeWide]}
        ${$isIconSet && inputHasIcon[$sizeWide]}
      }
    `};
`;

const Textarea = styled.textarea<TextareaTransientProps>`
  ${baseInput}
  overflow: hidden;
  min-height: ${scale230};
  padding-top: ${spaceM};
  line-height: 1.25;

  ${({ $size }) => $size && sizes[$size].input}
  ${({ $isFilled, $hasFocus, $error }) => ($isFilled || $hasFocus) && filledInput($error)}
  ${({ $isDisabled }) => ($isDisabled ? stateInput.disabled : stateInput.enabled)}


    ${({ $sizeConfined }) =>
    $sizeConfined &&
    css`
      @media ${mediaConfined} {
        ${$sizeConfined && sizes[$sizeConfined].input}
      }
    `};

  ${({ $sizeWide }) =>
    $sizeWide &&
    css`
      @media ${mediaWide} {
        ${$sizeWide && sizes[$sizeWide].input}
      }
    `};
`;

const TextareaWrapper = styled.div`
  padding: 20px 0;
`;

const Label = styled.label<LabelTransientProps>`
  ${({ $multiline }) => baseLabel($multiline)}

  ${({ $size }) => $size && sizes[$size].label}
  ${({ $isIconSet, $size }) => $isIconSet && labelHasIcon[$size]}
  ${({ $hasFocus, $isFilled, $error }) => ($hasFocus || $isFilled) && filledLabel($error)}
  ${({ $isDisabled }) => ($isDisabled ? stateLabel.disabled : stateLabel.enabled)}


  ${({ $sizeConfined, $isIconSet }) =>
    $sizeConfined &&
    css`
      @media ${mediaConfined} {
        ${$sizeConfined && sizes[$sizeConfined].label}
        ${$isIconSet && labelHasIcon[$sizeConfined]}
      }
    `};

  ${({ $sizeWide, $isIconSet }) =>
    $sizeWide &&
    css`
      @media ${mediaWide} {
        ${$sizeWide && sizes[$sizeWide].label}
        ${$isIconSet && labelHasIcon[$sizeWide]}
      }
    `};
`;

const IconWrapper = styled.div<IconTransientProps>`
  ${({ $hasFocus, $isFilled }) => baseIcon($hasFocus || $isFilled)}
`;

const PasswordWrapper = styled.div<{ filled?: boolean }>`
  color: ${({ theme, filled }) => (filled ? theme.color.neutral : theme.formField.label.textColor)};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: ${spaceM};
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;
`;

const ErrorMessageWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
`;

const ErrorCaption = styled(Caption)`
  color: ${({ theme }) => theme.formField.errorColor};
`;

export const Styled = {
  FormFieldContainer,
  Input,
  Label,
  Textarea,
  TextareaWrapper,
  IconWrapper,
  ErrorMessageWrapper,
  ErrorCaption,
  PasswordWrapper,
};
