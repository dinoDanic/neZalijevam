import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ifHovered } from "@kodiui/kodiui";
import React, { FC } from "react";
import { SubTitle, theme } from "styles";
import { BaseButton, ButtonProps } from "../BaseButton";

export const PrimaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      <SubTitle color={theme.color.black}>{children}</SubTitle>
    </Button>
  );
};

const hoverSytle = css`
  transform: translateY(2px);
  box-shadow: ${theme.boxShadow[1]};
`;

const activeStyle = css`
  transform: translateY(4px);
  box-shadow: ${theme.boxShadow[2]};
`;

const Button = styled(BaseButton)`
  background-color: ${theme.color.yellow};
  box-shadow: ${theme.boxShadow[0]};
  transition: ${theme.transition.base};
  ${ifHovered(hoverSytle)};
  &: active {
    ${activeStyle};
  }
`;
