import {
  Center,
  CursorMods,
  SizeMods,
  Split,
  Stack,
  Switcher,
} from "@kodiui/kodiui";
import { BaseBox, BaseButton, PrimaryButton } from "components";
import { useGetAllUsersQuery, User } from "generated/graphql";
import { ExpandAnimation } from "layout";
import { graphQlClient } from "lib";
import React, { FC, SetStateAction, useState } from "react";
import { theme } from "styles";

interface Props {
  selectedUser: User | undefined;
  setSelectedUser: React.Dispatch<SetStateAction<User | undefined>>;
}

export const SelectUser: FC<Props> = ({ selectedUser, setSelectedUser }) => {
  const { data, isLoading, error } = useGetAllUsersQuery(
    graphQlClient,
    {},
    { select: (d) => d.getAllUsers }
  );

  if (error) return <>error</>;

  return (
    <ExpandAnimation active>
      <Stack gap={4}>
        <BaseBox
          boxShadow
          space={4}
          modifiers={[
            SizeMods({
              maxHeight: "200px",
              minHeight: "200px",
              overflow: "auto",
            }),
          ]}
        >
          {isLoading && <Center>Getting users..</Center>}
          <Stack>
            {data?.map((user) => {
              const isSelected = user.id === selectedUser?.id;
              return (
                <BaseBox
                  key={user.id}
                  space={4}
                  background={
                    isSelected ? theme.color.blue : theme.color.blue800
                  }
                  modifiers={[CursorMods.Pointer]}
                  color={theme.color.white}
                  onClick={() => setSelectedUser(user)}
                >
                  {user.fullName}
                </BaseBox>
              );
            })}
          </Stack>
        </BaseBox>
        <PrimaryButton background={theme.color.pink} color={theme.color.black}>
          Pick rendom
        </PrimaryButton>
      </Stack>
    </ExpandAnimation>
  );
};
