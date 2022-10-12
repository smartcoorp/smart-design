import React from "react";
import { FaCheck, FaMinus } from "react-icons/fa";
import { Body } from "../body";
import { Styled } from "./checkbox.styles";
import { CheckboxProps } from "./checkbox.types";

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  onChange,
  checked,
  disabled,
  label,
  noMargin,
  checkboxDescription,
  size = "medium",
  sizeConfined,
  sizeWide,
  ...props
}) => {
  const selectedIcon = () => {
    if (checked == "mixed")
      return <FaMinus data-testid='checkbox-mixed' style={{ transform: "scale(0.85)" }} />;
    if (checked)
      return <FaCheck data-testid='checkbox-checked' style={{ transform: "scale(0.85)" }} />;
  };

  const handleCheckboxKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        onChange();
        break;
      default:
        break;
    }
  };

  return (
    <Styled.CheckboxContainer className={className}>
      <Styled.HiddenCheckbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
        {...props}
      />
      <Styled.Checkbox
        tabIndex={0}
        onKeyDown={handleCheckboxKeydown}
        $checked={checked}
        $disabled={disabled}
        $noMargin={noMargin}
        $size={size}
        $sizeConfined={sizeConfined}
        $sizeWide={sizeWide}
        data-testid='checkbox'
      >
        {selectedIcon()}
      </Styled.Checkbox>
      <Styled.CheckboxLabel
        noMargin
        size={size}
        sizeConfined={sizeConfined}
        sizeWide={sizeWide}
        $disabled={disabled}
      >
        {label}
      </Styled.CheckboxLabel>
    </Styled.CheckboxContainer>
  );
};

Checkbox.displayName = "Checkbox";
