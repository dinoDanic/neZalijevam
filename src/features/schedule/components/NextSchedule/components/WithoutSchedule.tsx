import { Container, SizeMods, Stack } from "@kodiui/kodiui";
import { PrimaryButton } from "components";
import { Schedule, useCreateScheduleMutation, User } from "generated/graphql";
import { graphQlClient } from "lib";
import { queryClient } from "lib/reactQuery";
import React, { FC, useState } from "react";
import { SelectUser } from "./SelectUser";

interface Props {
  schedule: Schedule | undefined | null;
  selectedDate: Date | null;
}

export const WithoutSchedule: FC<Props> = ({ schedule, selectedDate }) => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const { mutate } = useCreateScheduleMutation(graphQlClient, {
    onSuccess: () => queryClient.refetchQueries(["nextSchedule"]),
  });

  const create = async () => {
    if (!selectedDate) return;
    mutate({
      input: { date: selectedDate?.toString(), assigned: "1" },
    });
  };

  return (
    <Container modifiers={[SizeMods({ minWidth: "400px" })]}>
      <Stack gap={4}>
        {selectedDate && (
          <SelectUser
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        )}
        <PrimaryButton onClick={create} disabled={!Boolean(selectedUser)}>
          Create
        </PrimaryButton>
      </Stack>
    </Container>
  );
};
