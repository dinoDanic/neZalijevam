import styled from "@emotion/styled";
import { Container, ZIndex } from "@kodiui/kodiui";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  active: boolean | string;
  key?: string;
  childKey?: string;
}
export const ExpandAnimation: React.FC<Props> = ({
  children,
  active,
  key = "1",
  childKey = "2",
}) => {
  return (
    <AnimatePresence key={key} mode={"wait"}>
      {active && (
        <MotionContainer
          initial={{ height: "0px" }}
          animate={{ height: "auto", transition: { duration: 0.3 } }}
          exit={{ height: "0", transition: { delay: 0.3 } }}
          key={key}
        >
          <DelayChildren
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0 }}
            modifiers={[ZIndex(0)]}
            key={childKey}
          >
            {children}
          </DelayChildren>
        </MotionContainer>
      )}
    </AnimatePresence>
  );
};

const MotionContainer = motion(Container);

const DelayChildren = styled(motion(Container))``;
