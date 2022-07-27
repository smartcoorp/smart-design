import React from "react";
import { Styled } from "./button.styles";
import { ButtonProps } from "./button.types";
export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  href,
  icon: Icon,
  innerRef,
  loading = false,
  onClick,
  size = "medium",
  sizeConfined,
  sizeWide,
  to,
  type,
  variant = "primary",
  iconSize: iconSizePx,
  target = "_blank",
  ...props
}) => {
  const iconSize = iconSizePx ? iconSizePx : size === "small" ? 18 : 24;

  const iconOnly: boolean = !children;

  const commonProps = {
    "$iconOnly": iconOnly,
    "$size": size,
    "$sizeConfined": sizeConfined,
    "$sizeWide": sizeWide,
    "$variant": variant,
    "aria-label": loading ? "loading" : null,
    "data-xds": "Button",
    "disabled": disabled || loading,
    "$disabled": disabled || loading,

    onClick,
    "ref": innerRef,
  };

  const buttonContent = (
    <Styled.InnerContent>
      {loading && (
        <Styled.LoadingContainer aria-hidden='true'>
          <Styled.Loading size={size} />
        </Styled.LoadingContainer>
      )}
      {Icon && (
        <Styled.IconContainer $loading={loading}>
          <Icon size={iconSize} />
        </Styled.IconContainer>
      )}
      <Styled.Text $loading={loading}>{children}</Styled.Text>
    </Styled.InnerContent>
  );

  if (to) {
    return (
      <Styled.RouterButton to={to} {...commonProps} {...props}>
        {buttonContent}
      </Styled.RouterButton>
    );
  }
  if (href) {
    return (
      <Styled.ExternalButton {...commonProps} {...props} href={href} target={target}>
        {buttonContent}
      </Styled.ExternalButton>
    );
  }
  return (
    <Styled.Button type={type} {...commonProps} {...props}>
      {buttonContent}
    </Styled.Button>
  );
};

Button.displayName = "Button";
