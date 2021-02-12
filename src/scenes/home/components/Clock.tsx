import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cookies from "js-cookie";

import { cookiesTypes } from "../../../consts/cookies";

import ReplaceIcon from "@kiwicom/orbit-components/lib/icons/Replace";

import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";

const ToggleButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: 300ms;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  &:hover {
    ${ToggleButtonWrapper} {
      visibility: visible;
      opacity: 0.4;

      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;
const Time = styled.div`
  font-size: 120px;
  color: #eee;
`;
const DateWrapper = styled.div`
  font-size: 30px;
  color: #eee;
`;
const TooltipWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const formats = {
  HOURS_MINUTES: "HH:mm",
  HOURS_MINUTES_AM_PM: "h:mm A",
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const nth = (d: number) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

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
    console.log("wat");
    const newFormat =
      format === formats.HOURS_MINUTES
        ? formats.HOURS_MINUTES_AM_PM
        : formats.HOURS_MINUTES;
    setFormat(newFormat);
    cookies.set(cookiesTypes.CLOCK_FORMAT, newFormat, {
      expires: 365,
    });
  };

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const day = days[currentDate.getDay() - 1];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  return (
    <Wrapper>
      <TooltipWrapper>
        <ToggleButtonWrapper onClick={toggleClockFormat}>
          <Tooltip preferredPosition="top" content="Toggle Date Format">
            <ReplaceIcon customColor="white" />
          </Tooltip>
        </ToggleButtonWrapper>
      </TooltipWrapper>

      <Time>
        {hours}:{minutes}
      </Time>
      <DateWrapper>
        {day}, {month} {date.toString().padStart(2, "0")}
        {nth(date)}
      </DateWrapper>
    </Wrapper>
  );
};

export default Clock;
