import { Container, SizeMods, Stack, Switcher } from "@kodiui/kodiui";
import { BaseBox, PrimaryButton } from "components";
import { Schedule, useCreateScheduleMutation, User } from "generated/graphql";
import { graphQlClient } from "lib";
import { queryClient } from "lib/reactQuery";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { SubTitle, theme, Title } from "styles";
import { SelectUser } from "./SelectUser";

interface Props {
  schedule: Schedule | undefined | null;
  selectedDate: Date | null;
}

export const WithoutSchedule: FC<Props> = ({ selectedDate }) => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const { mutate } = useCreateScheduleMutation(graphQlClient, {
    onSuccess: () => {
      queryClient.refetchQueries(["nextSchedule"]);
      queryClient.refetchQueries(["getScheduledUser"]);
      queryClient.refetchQueries(["getScheduleHistory"]);
      toast.success("ok, will notify by email");
    },
  });

  const create = async () => {
    if (!selectedDate) return;
    mutate({
      input: { date: selectedDate?.toString(), assigned: selectedUser?.id },
    });
  };

  const random = () => {
    if (!selectedDate) {
      toast.error("Selecte date first");
      return;
    }
    if (confirm("Are you sure u want to assigned rendomly?")) {
      mutate({
        input: { date: selectedDate?.toString(), random: true },
      });
    }
  };

  return (
    <Container modifiers={[SizeMods({ minWidth: "400px" })]}>
      <BaseBox boxShadow>
        <Stack gap={4}>
          <Title>No schedule</Title>
          <SubTitle>Select date and user</SubTitle>
          {selectedDate && (
            <SelectUser
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          )}
          <Switcher>
            <PrimaryButton onClick={create} disabled={!Boolean(selectedUser)}>
              Create
            </PrimaryButton>
            <PrimaryButton
              background={theme.color.pink}
              onClick={random}
              color={theme.color.black}
            >
              Pick rendom
            </PrimaryButton>
          </Switcher>
        </Stack>
      </BaseBox>
    </Container>
  );
};
