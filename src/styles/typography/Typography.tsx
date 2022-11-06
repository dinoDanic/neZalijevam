import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorMods } from "@kodiui/kodiui";
import { CSSProperties } from "react";
import { theme } from "styles/theme";

export interface ColorMods {
  color?: CSSProperties["color"];
  background?: CSSProperties["background"];
}

const colors = ({ color, background }: ColorMods) => css`
  color: ${color};
  background: ${background};
`;

export const ExtraBoldStyle = css`
  font-weight: 800;
  font-size: 1.31rem;
`;

export const BoldStyle = css`
  font-weight: 700;
  font-size: 1.68rem;
`;

export const MediumStyle = css`
  font-weight: 500;
`;

export const Bold = styled.p`
  ${BoldStyle}
`;

export const TextStyle = css`
  ${MediumStyle};
  color: ${theme.color.black800};
  font-size: 0.9rem;
`;

export const Text = styled.p<ColorMods>`
  ${TextStyle}
  ${({ color, background }) => colors({ color, background })};
`;

export const TextBold = styled.p<ColorMods>`
  ${BoldStyle};
  color: ${theme.color.black800};
  ${({ color, background }) => colors({ color, background })};
  font-size: 0.9rem;
`;

export const Title = styled.h1<ColorMods>`
  ${ExtraBoldStyle};
  ${colors};
  font-size: 1.5rem;
`;

export const SubTitle = styled.h2`
  ${ExtraBoldStyle};
  font-size: 0.9rem;
`;
