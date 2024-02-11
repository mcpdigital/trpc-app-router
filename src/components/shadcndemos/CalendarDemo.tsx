"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default CalendarDemo;
