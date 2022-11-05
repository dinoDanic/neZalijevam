import styled from "@emotion/styled";
import React, { FC } from "react";
import { ExtraBold, theme } from "styles";
import { BaseButton, ButtonProps } from "../BaseButton";

export const PrimaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      <ExtraBold>{children}</ExtraBold>
    </Button>
  );
};

const Button = styled(BaseButton)`
  background-color: ${theme.color.black};
  color: ${theme.color.white};
`;
