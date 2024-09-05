"use client";

import {
  Calendar,
  EventWrapperProps,
  momentLocalizer,
  View,
  Views,
} from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

export default function BigCalendar() {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [curYear] = useState(new Date().getFullYear());

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      // formats={{ timeGutterFormat: "HH:mm" }}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(curYear - 1, 1, 0, 8, 0, 0)}
      max={new Date(curYear + 1, 1, 0, 17, 0, 0)}
    />
  );
}
