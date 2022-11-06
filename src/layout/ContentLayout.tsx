import styled from "@emotion/styled";
import {
  Box,
  Cluster,
  ColorMods,
  Container,
  FlexMods,
  MarginMods,
  SizeMods,
} from "@kodiui/kodiui";
import { routes } from "data";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { theme } from "styles";
import { Menu } from "./menu";

interface Props {
  children: ReactNode;
}

const EMPTY_LAYOUT: string[] = [routes.dashboard];

export const ContentLayout: FC<Props> = ({ children }) => {
  const { asPath } = useRouter();

  const emptyLayout = EMPTY_LAYOUT.includes(asPath);

  if (emptyLayout) {
    return (
      <>
        {children}
        <Menu />
      </>
    );
  }

  return (
    <Body>
      <Box
        space={4}
        modifiers={[
          SizeMods.FillScreen,
          FlexMods.Parent({ direction: "column" }),
        ]}
      >
        <Content>{children}</Content>
        <Menu />
      </Box>
    </Body>
  );
};

const Body = styled(Container)`
  ${SizeMods.FillScreen};
  ${FlexMods.Parent({ direction: "column" })}
  ${ColorMods({ background: theme.color.green })}
`;

const Content = styled(Cluster)`
  ${SizeMods({ maxWidth: "1600px" })}
  ${MarginMods.HAuto}
  flex: 1;
`;
