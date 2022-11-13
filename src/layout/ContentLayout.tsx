import styled from "@emotion/styled";
import {
  Cluster,
  Container,
  FlexMods,
  MarginMods,
  SizeMods,
} from "@kodiui/kodiui";
import { useBearStore } from "bear";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Menu } from "./menu";

interface Props {
  children: ReactNode;
}

const EMPTY_LAYOUT: string[] = [];

export const ContentLayout: FC<Props> = ({ children }) => {
  const background = useBearStore((store) => store.background);

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
    <Body background={background}>
      <Container
        modifiers={[
          SizeMods.FillScreen,
          FlexMods.Parent({ direction: "column" }),
        ]}
      >
        <Content>{children}</Content>
        <Menu />
      </Container>
    </Body>
  );
};

const Body = styled(Container)<{ background: string }>`
  ${SizeMods.FillScreen};
  ${FlexMods.Parent({ direction: "column" })};
  transition: 1s ease all;
  ${({ background }) => `background: ${background}`}
`;

const Content = styled(Cluster)`
  ${SizeMods({ maxWidth: "1600px" })};
  ${FlexMods.Parent({
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  })};
  ${MarginMods.HAuto};
  flex: 1;
`;
