import React, { useState, useEffect, createContext } from "react";

import { days, months, formats } from "consts/clock";
import { keys } from "consts/localStorage";
import useTranslate from "utils/useTranslate";

export const ClockContext = createContext({
  day: "",
  month: "",
  date: 0,
  hoursMinutes: "",
  hoursMinutesFormat: "",
  currentDate: new Date(),
  changeClockFormat: (newFormat: string) => {},
});

const ClockProvider = ({ children }: any) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoursMinutesFormat, setHoursMinutesFormat] = useState(
    localStorage.getItem(keys.CLOCK_FORMAT) || formats.HOURS_MINUTES
  );
  const translate = useTranslate();
  const changeClockFormat = (newFormat: string) => {
    setHoursMinutesFormat(newFormat);
    localStorage.setItem(keys.CLOCK_FORMAT, newFormat);
  };

  const tick = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = translate(days[currentDate.getDay()]);
  const month = translate(months[currentDate.getMonth()]);
  const date = currentDate.getDate();
  const hoursMinutes = currentDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: hoursMinutesFormat === formats.HOURS_MINUTES_AM_PM,
  });

  const value: any = {
    day,
    month,
    date,
    hoursMinutes,
    currentDate,
    hoursMinutesFormat,
    changeClockFormat,
  };

  return (
    <ClockContext.Provider value={value}>{children}</ClockContext.Provider>
  );
};

export default ClockProvider;
