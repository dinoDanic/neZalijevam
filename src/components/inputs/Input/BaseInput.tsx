import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  BorderMods,
  Box,
  Cluster,
  Stack,
} from "@kodiui/kodiui";
import { FC, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { theme } from "styles";
import { Icon } from "types";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?:  Icon;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
}

export const BaseInput: FC<InputProps> = ({
  label,
  icon,
  ...props
}) => {
  console.log(icon);
  if (label) {
    return (
      <Stack>
        {/* <Label color={theme.color.primary.Blue}>{label}</Label> */}
        <InputStyled {...props} />
      </Stack>
    );
  }

  return (
    <StyledBox space={3}>
      <Cluster>
        {icon && <>{icon.component({ size: icon.size })}</>}
        <InputStyled {...props} />
      </Cluster>
    </StyledBox>
  );
};

const InputFocusCss = css`
  box-shadow: ${theme.boxShadow[0]};
  ${BorderMods({
    /* borderColor: theme.color.primary.BodyTextNotice, */
    border: "thin",
  })};
`;

export const baseInputCss = css`
  outline: none;
  border: none;
`;

const InputStyled = styled.input`
  ${baseInputCss};
`;

const Icon = styled.div``;
const StyledBox = styled(Box)`
  border: 2px solid black;
  border-radius: 16px;
`;
