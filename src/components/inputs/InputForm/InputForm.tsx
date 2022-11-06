import React, { FC } from "react";
import styled from "@emotion/styled";
import { Box, ColorMods, Container, PaddingMods } from "@kodiui/kodiui";
import { BaseInput, baseInputCss } from "../Input/BaseInput";
import { InputProps } from "types";
import { ExpandAnimation } from "layout";
import { Text, theme } from "styles";
import { css } from "@emotion/react";

export const InputForm: FC<InputProps> = ({ register, error, ...rest }) => {
  const haveError = Boolean(error?.message);
  const err = (
    <Box
      modifiers={[ColorMods({ color: theme.color.red }), PaddingMods.Sides(0)]}
    >
      {error?.message}
    </Box>
  );

  return (
    <Container>
      <Input haveError={haveError} register={register} {...rest} />
      <ExpandAnimation active={haveError}>
        <Text>{error && err}</Text>
      </ExpandAnimation>
    </Container>
  );
};

const AlertStyle = css``;

const Input = styled(BaseInput)`
  ${baseInputCss};
  ${({ haveError }) => haveError && AlertStyle}
`;
