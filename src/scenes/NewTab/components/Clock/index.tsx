import React, { useContext } from "react";

import { ClockContext } from "services/Clock";
import useTranslate from "utils/useTranslate";

import { Wrapper, Time, DateWrapper } from "./index.styled";

const Clock = () => {
  const { day, month, date, hoursMinutes } = useContext(ClockContext);
  const translate = useTranslate();
  return (
    <Wrapper>
      <Time>{hoursMinutes}</Time>
      <DateWrapper>
        {translate("format_month", { day, month, date })}
      </DateWrapper>
    </Wrapper>
  );
};

export default Clock;
