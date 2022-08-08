import { borderRadiusS, dropShadowM, scale350, spaceM } from "@tokens";
import { motion } from "framer-motion";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: relative;
`;
const MenuContainer = styled(motion.ul)`
  width: ${scale350};
  margin: 0;
  padding: ${spaceM} 0;

  position: absolute;
  left: 0;
  top: calc(100% + ${spaceM});
  z-index: 2000;

  transform-origin: top left;

  background-color: ${({ theme }) => theme.menu.backgroundColor};
  border-radius: ${borderRadiusS};
  box-shadow: ${dropShadowM};
  border: 1px solid ${({ theme }) => theme.menu.borderColor};

  overflow: hidden;
`;

export const Styled = {
  MenuWrapper,
  MenuContainer,
};
