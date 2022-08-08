import React, { useEffect, useId, useState, useCallback } from "react";
import { useActiveElement } from "@hooks";
import { Styled } from "./menu.styles";
import { MenuProps } from "./menu.types";
import { ClickOutside } from "../click-outside";
import { Button } from "../button";
import { AnimatePresence } from "framer-motion";
import { useKeyPress } from "../../hooks/use-key-press/use-key-press";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export const Menu: React.FC<MenuProps> = ({ children, triggerProps, triggerText }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const id = useId();
  const activeElement = useActiveElement();

  const closeMenu = useCallback(() => {
    if (!isOpen) setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), []);

  useEffect(() => {
    if (!isOpen) return;
    const menu: HTMLElement | null = document.getElementById(id);
    if (!menu?.contains(activeElement)) {
      setIsOpen(false);
    }
  }, [activeElement, isOpen, id]);

  useKeyPress("Escape", closeMenu);

  return (
    <ClickOutside id={id} callback={closeMenu}>
      <Styled.MenuWrapper>
        <Button
          icon={isOpen ? IoChevronUpOutline : IoChevronDownOutline}
          size='medium'
          iconSize={18}
          iconAfter
          variant='text'
          {...triggerProps}
          onClick={toggleMenu}
        >
          {triggerText}
        </Button>
        <AnimatePresence>
          {isOpen && (
            <Styled.MenuContainer
              initial={{ scale: 0.95, opacity: 0.85 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.24, ease: [0, 0, 0.2, 1] }}
            >
              {children}
            </Styled.MenuContainer>
          )}
        </AnimatePresence>
      </Styled.MenuWrapper>
    </ClickOutside>
  );
};

Menu.displayName = "Menu";
