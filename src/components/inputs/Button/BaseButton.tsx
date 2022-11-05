import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  BorderMods,
  Cluster,
  CornerMods,
  CursorMods,
  FlexMods,
  PaddingMods,
  SizeMods,
} from "@kodiui/kodiui";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { theme } from "styles";
import { Icon } from "types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  background?: string;
  loading?: boolean;
  icon?: Icon;
}

export const BaseButton: FC<ButtonProps> = ({
  children,
  loading,
  icon,
  ...props
}) => {
  return (
    <Button {...props} disabled={loading === true}>
      <Cluster alignItems={"center"}>
        {loading ? <>loading..</> : children}
        {icon && <>{icon.component({ size: icon.size })}</>}
      </Cluster>
    </Button>
  );
};

export const BaseButtonCss = css`
  ${BorderMods.None}
  ${FlexMods.Parent({ alignItems: "center", justifyContent: "center" })}
  ${CursorMods.Pointer}
  ${PaddingMods.Ends(4)}
  ${PaddingMods.Sides(4)}
  ${CornerMods({ corners: theme.corners.base })}
`;

const Button = styled.button<ButtonProps>`
  ${BaseButtonCss}
  ${({ background }) => background && css({ background: background })}
`;