import { Center, Container, Stack } from "@kodiui/kodiui";
import { BaseButton, InputForm, PrimaryButton } from "components";
import React from "react";
import { FiUser, FiLock, FiArrowRight, FiChevronRight } from "react-icons/fi";

const LoginPage = () => {
  return (
    <Container
    >
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
        <PrimaryButton icon={{ component: FiChevronRight, size: 24 }}>
          Sign in
        </PrimaryButton>
      </Stack>
    </Container>
  );
};

export default LoginPage;
