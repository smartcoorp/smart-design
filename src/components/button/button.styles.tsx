import { Link } from "react-router-dom";
import {
  borderRadiusS,
  mediaConfined,
  primary,
  scale070,
  scale080,
  scale100,
  mediaWide,
  motionEasingStandard,
  motionTimeXS,
  gray300,
  gray400,
  gray200,
  scale140,
  scale160,
  scale150,
  primary400,
} from "../../tokens";
import styled, { css } from "styled-components";
import { ButtonSizes, ButtonVariants } from "./button.types";

import { ring } from "../../styles/ring";
import { DotLoading } from "../dot-loading";
type ButtonTransientProps = {
  $ellipsis?: boolean;
  $iconOnly: boolean;
  $size: ButtonSizes;
  $sizeConfined?: ButtonSizes;
  $sizeWide?: ButtonSizes;
  $variant: ButtonVariants;
  $disabled?: boolean;
};

type IconContainerTransientProps = {
  $loading: boolean;
  $iconSize?: number;
};
type TextTransientProps = {
  $ellipsis?: boolean;
  $loading?: boolean;
};

type InnerContentTransientProps = {
  $ellipsis?: boolean;
};

const baseButton = css`
  outline: none;
  border: none;
  font-weight: 700;
  color: black;
  border-radius: ${borderRadiusS};
  cursor: pointer;
  background-color: transparent;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  vertical-align: top;

  transition-property: transform, background-color, box-shadow;
  transition-duration: ${motionTimeXS};
  transition-timing-function: ${motionEasingStandard};

  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: none;
  }

  &:disabled {
    cursor: default;
  }
`;

// *** Sizes ***
export const sizes = {
  small: css`
    font-size: ${scale070};
    height: ${scale140};
    min-width: ${scale140};
    padding-left: calc(${scale140} / 2);
    padding-right: calc(${scale140} / 2);
  `,
  medium: css`
    font-size: ${scale080};
    height: ${scale150};
    min-width: ${scale150};
    padding-left: calc(${scale150} / 2);
    padding-right: calc(${scale150} / 2);
  `,
  large: css`
    font-size: ${scale100};
    height: ${scale160};
    min-width: ${scale160};
    padding-left: calc(${scale160} / 2);
    padding-right: calc(${scale160} / 2);
  `,
};

// *** Variants ***
export const variants = {
  primary: css`
    background-color: ${primary};

    &:hover {
      background-color: ${primary400};
    }

    &:focus-visible {
      ${ring({ color: primary })}
    }

    &:active {
      color: white;
      background-color: black;
      transform: scale(0.98);
    }
  `,
  secondary: css`
    background-color: transparent;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    color: black;

    &:hover {
      background-color: ${gray200};
    }
    &:focus-visible {
      ${ring({ color: primary })}
    }

    &:active {
      color: white;
      background-color: black;
      transform: scale(0.98);
    }
  `,
  text: css`
    padding: 0px !important;
  `,
};

export const disabled = {
  primary: css`
    background-color: ${gray300};
    color: ${gray400};
    cursor: not-allowed;
  `,
  secondary: css`
    border: 2px solid ${gray300};
    color: ${gray400};
    cursor: not-allowed;
  `,
  text: css``,
};

// *** Icon ***
const IconContainer = styled.div<IconContainerTransientProps>`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $loading }) =>
    $loading &&
    css`
      visibility: hidden;
    `};
`;

type IconOnlyProps = {
  size: ButtonSizes;
};
const iconOnly = ({ size }: IconOnlyProps) => css`
  padding: 0;
  border-radius: 50%;
  & ${IconContainer} {
    margin: 0;
  }
`;

const Button = styled.button<ButtonTransientProps>`
  ${baseButton};
  ${({ $variant, $disabled }) => ($variant && $disabled ? disabled[$variant] : variants[$variant])}
  ${({ $size }) => $size && sizes[$size]}


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

  ${({ $iconOnly, $size }) => $iconOnly && iconOnly({ size: $size })};
`;

const ExternalButton = styled.a<ButtonTransientProps>`
  ${baseButton};
  ${({ $variant, $disabled }) => ($variant && $disabled ? disabled[$variant] : variants[$variant])}
  ${({ $size }) => $size && sizes[$size]}


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

  ${({ $iconOnly, $size }) => $iconOnly && iconOnly({ size: $size })};
`;

const RouterButton = styled(Link)<ButtonTransientProps>`
  ${baseButton};
  ${({ $variant, $disabled }) => ($variant && $disabled ? disabled[$variant] : variants[$variant])}
  ${({ $size }) => $size && sizes[$size]}


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

const InnerContent = styled.div<InnerContentTransientProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

// eslint-disable-next-line prettier/prettier
const LoadingContainer = styled.div`
  left: 50%;
  position: absolute !important;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Loading = styled(DotLoading)`
  left: 50%;
  position: absolute !important;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.span<TextTransientProps>`
  display: inline-flex;
  margin: 0;

  ${({ $loading }) =>
    $loading &&
    css`
      visibility: hidden;
    `};
`;

export const Styled = {
  Button,
  IconContainer,
  InnerContent,
  Loading,
  LoadingContainer,
  RouterButton,
  Text,
  ExternalButton,
};
