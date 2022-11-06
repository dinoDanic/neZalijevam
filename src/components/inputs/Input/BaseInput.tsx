import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Cluster, CornerMods, Stack } from "@kodiui/kodiui";
import { FC } from "react";
import { TextStyle, theme } from "styles";
import { InputProps } from "types";

export const BaseInput: FC<InputProps> = ({
  label,
  icon,
  register,
  haveError = false,
  ...props
}) => {
  if (label) {
    return (
      <Stack>
        {/* <Label color={theme.color.primary.Blue}>{label}</Label> */}
        <InputStyled {...props} />
      </Stack>
    );
  }

  return (
    <StyledBox haveError={haveError} space={3} modSpace={{ s: 3, xl: 3, m: 3 }}>
      <Cluster>
        {icon && <>{icon.component({ size: icon.size })}</>}
        <InputStyled {...register} {...props} />
      </Cluster>
    </StyledBox>
  );
};

export const baseInputCss = css`
  ${TextStyle}
  outline: none;
  border: none;
  flex: 1;
  &:-webkit-autofill {
    font-size: inherit;
  }
`;

const inputErrorCss = css`
  border: 3px solid ${theme.color.red};
`;

const InputStyled = styled.input`
  ${baseInputCss};
`;

const Icon = styled.div``;

const StyledBox = styled(Box)<{ haveError: boolean }>`
  border: 2px solid black;
  ${CornerMods({ corners: theme.corners.base })};
  ${({ haveError }) => haveError && inputErrorCss}
`;
