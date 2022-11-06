import { Cluster, Container, FlexMods, SizeMods, Stack } from "@kodiui/kodiui";
import { BaseBox, InputForm, PrimaryButton } from "components";
import { routes } from "data";
import { registerForm } from "features/users/data";
import { useCreateUserMutation, CreateUserInput } from "generated/graphql";
import { GraphQLError } from "graphql";
import { graphQlClient } from "lib";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TextBold, theme, Title, Text } from "styles";

export const RegisterForm = () => {
  const { push } = useRouter();

  const { mutate, isLoading, error } = useCreateUserMutation<GraphQLError>(
    graphQlClient,
    {
      onSuccess: () => {
        push(routes.login);
      },
    }
  );

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>();

  const submit = async () => {
    mutate({ input: getValues() });
  };

  const form = registerForm(register, errors);

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
              <Title>Register</Title>
              <Text>Well.. why not?</Text>
            </Stack>
            <Stack gap={4}>
              {form.map((i) => {
                return (
                  <InputForm
                    key={i.id}
                    register={i.register}
                    type={i.type}
                    placeholder={i.placeholder}
                    error={i.error}
                    icon={i.icon}
                  />
                );
              })}
            </Stack>
            <Stack gap={14}>
              <PrimaryButton type={"submit"} loading={isLoading}>
                register
              </PrimaryButton>
              <Cluster alignItems={"center"}>
                <Text>YoU ArE nOt NeW?</Text>
                <Link href={routes.login}>
                  <TextBold style={{ color: theme.color.red }}>Login</TextBold>
                </Link>
              </Cluster>
            </Stack>
          </Stack>
        </BaseBox>
      </form>
    </Container>
  );
};
