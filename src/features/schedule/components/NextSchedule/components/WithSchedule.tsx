import { Container, Stack } from "@kodiui/kodiui";
import { useBearStore } from "bear";
import { BaseBox, PrimaryButton } from "components";
import { differenceInDays } from "date-fns";
import {
  Schedule,
  useGetScheduledUserQuery,
  useUpdateScheduleMutation,
} from "generated/graphql";
import { GraphQLError } from "graphql";
import { graphQlError } from "helpers";
import { graphQlClient } from "lib";
import { queryClient } from "lib/reactQuery";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SubTitle, theme, Title } from "styles";

interface Props {
  schedule: Schedule | undefined | null;
}

export const WithSchedule: FC<Props> = ({ schedule }) => {
  const setBackground = useBearStore((state) => state.setBackground);
  const [difference, setDifference] = useState<number | undefined>(undefined);

  const { data } = useGetScheduledUserQuery(
    graphQlClient,
    {},
    { select: (d) => d.getScheduledUser }
  );

  const { mutate } = useUpdateScheduleMutation<GraphQLError>(graphQlClient, {
    onSuccess: () => {
      queryClient.refetchQueries(["nextSchedule"]);
      toast.success("ok");
    },
    onError: (e) => toast.error(graphQlError(e)),
  });

  const zali = () => {
    if (!schedule?.id) return;
    mutate({ input: { scheduleId: schedule?.id, watered: true } });
  };

  useEffect(() => {
    const today = new Date().setHours(0, 0, 0, 0);
    const scheduleDate = new Date(schedule?.date || "");
    setDifference(differenceInDays(scheduleDate, today));

    if (difference === undefined) {
      setBackground(theme.color.green);
      return;
    }
    if (difference === 0) {
      setBackground(theme.color.yellow);
      return;
    }
    if (difference < 0) {
      setBackground(theme.color.red);
      return;
    }
    if (difference > 5) {
      setBackground(theme.color.green);
      return;
    }
  }, [schedule, difference, setBackground]);

  return (
    <Container>
      <Stack>
        <Title>Schedule</Title>
        <BaseBox space={4}>
          <SubTitle>{data?.nickName}</SubTitle>
          <SubTitle>{schedule?.date}</SubTitle>
        </BaseBox>
        <PrimaryButton
          background={theme.color.blue800}
          color={theme.color.white}
          onClick={zali}
        >
          Zali!
        </PrimaryButton>
      </Stack>
    </Container>
  );
};
