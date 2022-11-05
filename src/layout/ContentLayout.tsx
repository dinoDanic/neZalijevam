import styled from "@emotion/styled";
import {
  Box,
  Cluster,
  ColorMods,
  Container,
  MarginMods,
  Overflow,
  SizeMods,
} from "@kodiui/kodiui";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { theme } from "styles";

interface Props {
  children: ReactNode;
}

const EMPTY_LAYOUT: string[] = [];

export const ContentLayout: FC<Props> = ({ children }) => {
  const { asPath } = useRouter();

  const emptyLayout = EMPTY_LAYOUT.includes(asPath);

  if (emptyLayout) {
    return <>{children}</>;
  }

  return (
    <Body>
      <Cont>
        <Box space={8} modifiers={[SizeMods.FullWidth]}>
          <Content>{children}</Content>
        </Box>
      </Cont>
    </Body>
  );
};

const Body = styled(Container)`
  ${SizeMods.FillScreen};
  ${ColorMods({ background: theme.color.green })}
`;

const Cont = styled(Container)`
  ${Overflow.Hidden}
`;

const Content = styled(Cluster)`
  ${SizeMods({ maxWidth: "1600px" })}
  ${MarginMods.HAuto}
`;
