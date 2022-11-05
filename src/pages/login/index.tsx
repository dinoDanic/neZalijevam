import { Cluster, Container, FlexMods, SizeMods, Stack } from "@kodiui/kodiui";
import { BaseBox, InputForm, PrimaryButton } from "components";
import { routes } from "data";
import Link from "next/link";
import React from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { Text, TextBold, theme, Title } from "styles";

const LoginPage = () => {
  return (
    <Container
      modifiers={[
        FlexMods.Parent({ alignItems: "center", justifyContent: "center" }),
        SizeMods.FillScreen,
      ]}
    >
      <BaseBox maxWidth={"450px"} boxShadow>
        <Stack gap={14}>
          <Stack gap={4}>
            <Title>Login</Title>
            <Text>
              You don’t think you should login first and behave like human not
              robot.
            </Text>
          </Stack>
          <Stack gap={4}>
            <InputForm
              type={"email"}
              placeholder={"Email address"}
              icon={{ component: FiUser, size: 24 }}
            />
            <InputForm
              type={"password"}
              placeholder={"Password"}
              icon={{ component: FiLock, size: 24 }}
            />
          </Stack>
          <Stack gap={14}>
            <PrimaryButton>Sign in</PrimaryButton>
            <Cluster alignItems={"center"}>
              <Text>You are New?</Text>
              <Link href={routes.register}>
                <TextBold style={{ color: theme.color.red }}>
                  Create new
                </TextBold>
              </Link>
            </Cluster>
          </Stack>
        </Stack>
      </BaseBox>
    </Container>
  );
};

export default LoginPage;
