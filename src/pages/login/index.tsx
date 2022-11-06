import { Cluster, Container, FlexMods, SizeMods, Stack } from "@kodiui/kodiui";
import { BaseBox, InputForm, PrimaryButton } from "components";
import { routes } from "data";
import { LoginQueryVariables, useLoginQuery } from "generated/graphql";
import { LocalStorage } from "helpers";
import { graphQlClient } from "lib";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiLock } from "react-icons/fi";
import { Text, TextBold, theme, Title } from "styles";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginQueryVariables>();

  const router = useRouter();

  const { refetch, isFetching } = useLoginQuery(
    graphQlClient,
    { ...getValues() },
    {
      enabled: false,
      onSuccess: (data) => {
        if (data.login) {
          LocalStorage.setItem("nezalijevam-token", data.login);
          router.push(routes.dashboard);
        }
      },
    }
  );

  const submit = () => {
    refetch();
  };

  return (
    <Container
      modifiers={[
        FlexMods.Parent({ alignItems: "center", justifyContent: "center" }),
        SizeMods.FillScreen,
      ]}
    >
      <form onSubmit={handleSubmit(submit)}>
        <BaseBox width={"400px"} boxShadow>
          <Stack gap={10}>
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
                register={register("email", { required: "Email is required" })}
                error={errors.email}
              />
              <InputForm
                type={"password"}
                placeholder={"Password"}
                icon={{ component: FiLock, size: 24 }}
                register={register("password", {
                  required: "Password is required",
                })}
                error={errors.password}
              />
            </Stack>
            <Stack gap={14}>
              <PrimaryButton loading={isFetching}>Sign in</PrimaryButton>
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
      </form>
    </Container>
  );
};

export default LoginPage;
