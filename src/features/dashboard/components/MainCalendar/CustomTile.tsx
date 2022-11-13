import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { isSameDay } from "date-fns";
import { Schedule } from "generated/graphql";
import React, { FC } from "react";
import { CalendarTileProperties } from "react-calendar";
import { FiCheck } from "react-icons/fi";
import { theme } from "styles";

interface Props {
  tileProps: CalendarTileProperties;
  schedule: Schedule | null | undefined;
  currentMonth: Schedule[] | undefined | null;
}

export const CustomTile: FC<Props> = ({
  tileProps,
  schedule,
  currentMonth,
}) => {
  const current = currentMonth?.find((cd) =>
    isSameDay(new Date(cd.date || ""), tileProps.date)
  );
  console.log("current", current);

  if (current?.watered) {
    return (
      <Check>
        <FiCheck color={theme.color.green} size={20} />
      </Check>
    );
  }

  if (!schedule?.date) return null;
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

const scaleUp = keyframes`
 from, 0%, to {
     transform: scale(0)
   }
   100% {
       transform: scale(1)
     }
`;

const Check = styled.div`
  position: absolute;
  bottom: -5px;
  right: 5px;
  transform: scale(0);
  transition: 0.3s ease all;
  animation: ${scaleUp} 0.3s ease;
  animation-fill-mode: forwards;
`;
