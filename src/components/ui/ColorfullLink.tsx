import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Cluster,
  Container,
  CursorMods,
  ifHovered,
  SizeMods,
  Split,
  TextMods,
} from "@kodiui/kodiui";
import React, { CSSProperties, FC, ReactNode } from "react";
import {  FiChevronRight } from "react-icons/fi";
import { TextBold, theme } from "styles";

interface Props {
  children: ReactNode;
  background: CSSProperties["background"];
}

export const ColorfullLink: FC<Props> = ({ background, children }) => {
  return (
    <Container modifiers={[ifHovered(Hover), CursorMods.Pointer]}>
      <Split alignItems={"center"}>
        <Cluster alignItems={"center"} gap={4}>
          <Dot background={background} />
          <Container modifiers={[SizeMods({ minWidth: "150px" })]}>
            <TextBold>{children}</TextBold>
          </Container>
        </Cluster>
        <FiChevronRight size={20} strokeWidth={4} />
      </Split>
    </Container>
  );
};

const Dot = styled.div<{ background: CSSProperties["background"] }>`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 2px solid ${theme.color.black};
  ${({ background }) => background && `background: ${background}`};
`;

const Hover = css`
  ${TextMods({ textDecoration: "underline" })}
`;
