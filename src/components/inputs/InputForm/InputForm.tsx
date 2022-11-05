import React, { FC } from "react";
import styled from "@emotion/styled";
import { Box, Container, FlexMods, PaddingMods } from "@kodiui/kodiui";
import { BaseInput, baseInputCss, InputProps } from "../Input/BaseInput";

export const InputForm: FC<InputProps> = ({ register, error, ...rest }) => {
  const err = (
    <Box
      modifiers={[
        FlexMods.Parent({ justifyContent: "flex-end" }),
        // ColorMods({ color: theme.color.primary.Magenta }),
        PaddingMods.Sides(0),
      ]}
    >
      {error?.message}
    </Box>
  );

  return (
    <Container>
      {error && err}
      <Input {...register} {...rest} />
    </Container>
  );
};

const Input = styled(BaseInput)`
  ${baseInputCss}
`;
