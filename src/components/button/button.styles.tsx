import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { DotLoading } from "../dot-loading";

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
  scale140,
  scale160,
  scale150,
  spaceS,
} from "@tokens";

import { ButtonSizes, ButtonVariants } from "./button.types";

import { ring } from "@styles";

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
  $iconAfter?: boolean;
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

  transition-property: transform, background-color, box-shadow, border;
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
      background-color: ${({ theme }) => theme.button.primary.hoverBackgroundColor};
    }

    &:focus-visible {
      ${({ theme }) => ring({ color: primary, offsetColor: theme.backgroundScreen })}
    }

    &:active {
      color: ${({ theme }) => theme.color.invertedNeutral};
      background-color: ${({ theme }) => theme.color.neutral};
      transform: scale(0.98);
    }
  `,
  secondary: css`
    background-color: transparent;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.neutral};
    color: ${({ theme }) => theme.color.neutral};

    &:hover {
      background-color: ${({ theme }) => theme.button.secondary.hoverBackgroundColor};
    }
    &:focus-visible {
      ${({ theme }) => ring({ color: primary, offsetColor: theme.backgroundScreen })}
    }

    &:active {
      color: ${({ theme }) => theme.color.invertedNeutral};
      background-color: ${({ theme }) => theme.color.neutral};
      transform: scale(0.98);
    }
  `,
  text: css`
    position: relative;
    color: ${({ theme }) => theme.color.neutral};
    padding: 0px !important;
    border-radius: 0 !important;
    border-bottom: 2px solid transparent;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      top: calc(100% - 5px);
      background-color: transparent;
    }
    &:focus-visible {
      &:after {
        background-color: ${({ theme }) => theme.color.neutral};
      }
    }
  `,
};

export const disabled = {
  primary: css`
    background-color: ${({ theme }) => theme.common.disabledBackgroundColor};
    color: ${({ theme }) => theme.common.disabledSurfaceColor};
    cursor: not-allowed;
  `,
  secondary: css`
    border: 2px solid ${({ theme }) => theme.common.disabledSurfaceColor};
    color: ${({ theme }) => theme.common.disabledSurfaceColor};
    cursor: not-allowed;
  `,
  text: css`
    color: ${({ theme }) => theme.common.disabledSurfaceColor};
    padding: 0px !important;
    height: 100% !important;
  `,
};

// *** Icon ***
const IconContainer = styled.div<IconContainerTransientProps>`
  margin-right: ${({ $iconAfter }) => !$iconAfter && spaceS};
  margin-left: ${({ $iconAfter }) => $iconAfter && spaceS};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $loading }) =>
    $loading &&
    css`
      visibility: hidden;
    `};
`;

const iconOnly = css`
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

  ${({ $iconOnly }) => $iconOnly && iconOnly};
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

  ${({ $iconOnly }) => $iconOnly && iconOnly};
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
