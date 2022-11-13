import { Stack } from "@kodiui/kodiui";
import { BaseBox } from "components";
import { CustomTile } from "features/dashboard";
import {
  Schedule,
  useGetScheduleHistoryQuery,
  useNextScheduleQuery,
} from "generated/graphql";
import { graphQlClient } from "lib";
import React, { useState } from "react";
import { Calendar, ViewCallbackProperties } from "react-calendar";
import { WithoutSchedule, WithSchedule } from "./components";

export const NextSchedule = () => {
  const [value, onChange] = useState<Date | null>(null);

  const [queryDate, setQueryDate] = useState<Date>(new Date());

  const [currentMonth, setCurrentMonth] = useState<
    Schedule[] | undefined | null
  >([]);

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

  useGetScheduleHistoryQuery(
    graphQlClient,
    {
      month: queryDate?.getMonth() + 1,
      year: queryDate?.getFullYear(),
    },
    {
      onSuccess: (s) => setCurrentMonth(s.getScheduleHistory),
      cacheTime: 0,
      refetchOnMount: "always",
    }
  );

  const onAcitveStartDateChange = (props: ViewCallbackProperties) => {
    setQueryDate(props.activeStartDate);
  };

  if (isLoading) {
    return <>Loading..</>;
  }
  if (error) {
    return <>{error}</>;
  }

  const content = () => {
    if (data?.date) {
      return <WithSchedule schedule={data} />;
    }
    return <WithoutSchedule schedule={data} selectedDate={value} />;
  };

  return (
    <Stack gap={4}>
      <BaseBox boxShadow>
        <Calendar
          onChange={onChange}
          value={value}
          onActiveStartDateChange={(d) => onAcitveStartDateChange(d)}
          tileContent={(props) => (
            <CustomTile
              tileProps={props}
              schedule={data}
              currentMonth={currentMonth}
            />
          )}
        />
      </BaseBox>
      {content()}
    </Stack>
  );
};
