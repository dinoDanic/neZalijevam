import styled from "@emotion/styled";
import { Schedule } from "generated/graphql";
import React, { FC } from "react";
import { CalendarTileProperties } from "react-calendar";
import { theme } from "styles";

interface Props {
  tileProps: CalendarTileProperties;
  schedule: Schedule | null | undefined;
}

export const CustomTile: FC<Props> = ({ tileProps, schedule }) => {
  if (!schedule?.date) return null

  const scheduleDate = new Date(schedule.date || "");

  const isScheduled =
    scheduleDate.setHours(0, 0, 0, 0) === tileProps.date.setHours(0, 0, 0, 0);

  if (isScheduled) {
    return (
      <Container>
        <Select />
      </Container>
    );
  }

  return null;
};

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Select = styled.div`
  height: 80%;
  aspect-ratio: 1 / 1;
  border: 3px solid ${theme.color.red};
  border-radius: 100%;
`;
