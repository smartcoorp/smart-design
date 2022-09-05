import React from "react";

import ReactDom from "react-dom";

import { Styled } from "./modal.styles";
import { ModalProps } from "./modal.types";

import { ImCross } from "react-icons/im";
import { AnimatePresence } from "framer-motion";

const backgroundVariants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
const bodyVariants = {
  animate: {
    y: 0,
    transition: {
      duration: 0.75,
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
  },
  initial: {
    y: -50,
    transition: {
      duration: 0.75,
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
  },
};

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  show,
  closeIcon = false,
  onClose,
  rootId,
  modalDescription,
}) => {
  if (!show) return null;

  return ReactDom.createPortal(
    <AnimatePresence>
      {show && (
        <Styled.ModalBackground
          className={className}
          key='modal-background'
          variants={backgroundVariants}
          initial='initial'
          animate='animate'
          exit='initial'
          onClick={onClose}
          data-testid='modal-background'
          aria-hidden={!show}
        >
          <Styled.ModalContainer
            variants={bodyVariants}
            onClick={(e: any) => e.stopPropagation()}
            role='dialog'
            aria-label={modalDescription}
            aria-hidden={!show}
          >
            {closeIcon && (
              <Styled.ModalCloseIcon onClick={onClose} data-testid='close-modal-icon'>
                <ImCross size={12} />
              </Styled.ModalCloseIcon>
            )}
            {children}
          </Styled.ModalContainer>
        </Styled.ModalBackground>
      )}
    </AnimatePresence>,
    document.getElementById(rootId)!
  );
};

Modal.displayName = "Modal";
