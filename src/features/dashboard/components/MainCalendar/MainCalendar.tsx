import React, { useState } from "react";

import Calendar, { CalendarTileProperties } from "react-calendar";

export const MainCalendar = () => {
  const [value, onChange] = useState<Date | null>(null);
  return <Calendar calendarType={"US"} onChange={onChange} value={value} />;
};
