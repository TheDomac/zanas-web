import React, { useState, useEffect, createContext } from "react";
import cookies from "js-cookie";

import { days, months, formats } from "consts/clock";
import { cookiesTypes } from "consts/cookies";
import translate from "utils/translate";

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
    cookies.get(cookiesTypes.CLOCK_FORMAT) || formats.HOURS_MINUTES
  );

  const changeClockFormat = (newFormat: string) => {
    setHoursMinutesFormat(newFormat);
    cookies.set(cookiesTypes.CLOCK_FORMAT, newFormat, {
      expires: 365,
      sameSite: "lax",
    });
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
