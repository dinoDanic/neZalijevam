import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  BorderMods,
  Cluster,
  ColorMods,
  CornerMods,
  CursorMods,
  FlexMods,
  PaddingMods,
} from "@kodiui/kodiui";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { SubTitle, theme } from "styles";
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
    <Button {...props}>
      <Cluster alignItems={"center"}>
        {loading ? (
          <SubTitle color={theme.color.black}>loading..</SubTitle>
        ) : (
          children
        )}
        {icon && <>{icon.component({ size: icon.size })}</>}
      </Cluster>
    </Button>
  );
};

export const BaseButtonCss = css`
  ${BorderMods({ border: "thick", borderColor: theme.color.black })}
  ${ColorMods({ color: theme.color.black })}
  ${FlexMods.Parent({ alignItems: "center", justifyContent: "center" })}
  ${CursorMods.Pointer}
  ${PaddingMods.Ends(4)}
  ${PaddingMods.Sides(4)}
  ${CornerMods({ corners: theme.corners.base })}
`;

const Button = styled.button<ButtonProps>`
  ${BaseButtonCss};
`;
