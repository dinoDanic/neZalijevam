import { Cluster, Container, FlexMods, SizeMods, Stack } from "@kodiui/kodiui";
import { BaseBox, InputForm, PrimaryButton } from "components";
import { routes } from "data";
import Link from "next/link";
import React from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { TextBold, theme, Title, Text } from "styles";

const Register = () => {
  return (
    <Container
      modifiers={[
        FlexMods.Parent({ alignItems: "center", justifyContent: "center" }),
        SizeMods.FillScreen,
      ]}
    >
      <BaseBox width={"450px"} boxShadow>
        <Stack gap={14}>
          <Stack gap={4}>
            <Title>Register</Title>
            <Text>Well.. why not?</Text>
          </Stack>
          <Stack gap={4}>
            <InputForm type={"text"} placeholder={"Full Name"} />
            <InputForm type={"text"} placeholder={"Nick Name"} />
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
            <InputForm
              type={"password"}
              placeholder={"Repeat Password"}
              icon={{ component: FiLock, size: 24 }}
            />
          </Stack>
          <Stack gap={14}>
            <PrimaryButton>Zali to cvijece</PrimaryButton>
            <Cluster alignItems={"center"}>
              <Text>YoU ArE nOt NeW?</Text>
              <Link href={routes.login}>
                <TextBold style={{ color: theme.color.red }}>Login</TextBold>
              </Link>
            </Cluster>
          </Stack>
        </Stack>
      </BaseBox>
    </Container>
  );
};

export default Register;
