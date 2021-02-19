import React, { useState, useEffect } from "react";
import cookies from "js-cookie";

import ReplaceIcon from "@kiwicom/orbit-components/lib/icons/Replace";
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";

import { cookiesTypes } from "consts/cookies";
import { formats, days, months } from "consts/clock";
import translate from "utils/translate";

import {
  Wrapper,
  ToggleButtonWrapper,
  Time,
  DateWrapper,
} from "./index.styled";

const Clock = () => {
  const [format, setFormat] = useState(
    cookies.get(cookiesTypes.CLOCK_FORMAT) || formats.HOURS_MINUTES
  );
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const toggleClockFormat = () => {
    const newFormat =
      format === formats.HOURS_MINUTES
        ? formats.HOURS_MINUTES_AM_PM
        : formats.HOURS_MINUTES;
    setFormat(newFormat);
    cookies.set(cookiesTypes.CLOCK_FORMAT, newFormat, {
      expires: 365,
    });
  };

  const day = translate(days[currentDate.getDay()]);
  const month = translate(months[currentDate.getMonth()]);
  const date = currentDate.getDate();

  return (
    <Wrapper>
      <ToggleButtonWrapper onClick={toggleClockFormat}>
        <Tooltip
          preferredPosition="top"
          content={translate("change_date_format")}
        >
          <ReplaceIcon customColor="white" />
        </Tooltip>
      </ToggleButtonWrapper>

      <Time>
        {currentDate.toLocaleString(
          format === formats.HOURS_MINUTES_AM_PM ? "en-US" : "de-DE",
          {
            hour: "numeric",
            minute: "numeric",
            hour12: format === formats.HOURS_MINUTES_AM_PM,
          }
        )}
      </Time>
      <DateWrapper>
        {translate("format_month", { day, month, date })}
      </DateWrapper>
    </Wrapper>
  );
};

export default Clock;
