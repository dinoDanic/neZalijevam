import { Stack } from "@kodiui/kodiui";
import { BaseBox } from "components";
import { CustomTile } from "features/dashboard";
import { useNextScheduleQuery } from "generated/graphql";
import { graphQlClient } from "lib";
import React, { useState } from "react";
import { Calendar } from "react-calendar";
import { WithoutSchedule, WithSchedule } from "./components";

export const NextSchedule = () => {
  const [value, onChange] = useState<Date | null>(null);

  const { data, error, isLoading } = useNextScheduleQuery(
    graphQlClient,
    {},
    {
      select: (d) => d.nextSchedule,
      onSuccess: (d) => {
        if (d) onChange(new Date(d.date || ""));
      },
    }
  );

  if (isLoading) {
    return <>Loading..</>;
  }
  if (error) {
    return <>{error}</>;
  }

  const content = () => {
    if (data?.date) {
      return <WithSchedule />;
    }
    return <WithoutSchedule schedule={data} selectedDate={value} />;
  };

  return (
    <Stack gap={4}>
      <BaseBox boxShadow>
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={(props) => (
            <CustomTile tileProps={props} schedule={data} />
          )}
        />
      </BaseBox>
      {content()}
    </Stack>
  );
};
