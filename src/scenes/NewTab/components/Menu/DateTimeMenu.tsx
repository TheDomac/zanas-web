import React, { useContext } from "react";

import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Button from "@kiwicom/orbit-components/lib/Button";
import Separator from "@kiwicom/orbit-components/lib/Separator";
import ChevronLeftIcon from "@kiwicom/orbit-components/lib/icons/ChevronLeft";
import CircleEmptyIcon from "@kiwicom/orbit-components/lib/icons/CircleEmpty";
import CheckCircleIcon from "@kiwicom/orbit-components/lib/icons/CheckCircle";

import translate from "utils/translate";
import { ClockContext } from "services/Clock";
import { formats } from "consts/clock";

const DateTimeMenu = ({ setSelectedMenuItem, menuItems }: any) => {
  const { currentDate, hoursMinutesFormat, changeClockFormat } = useContext(
    ClockContext
  );

  return (
    <>
      <Separator spaceAfter="small" />
      <Stack
        direction="row"
        spacing="small"
        align="center"
        justify="center"
        spaceAfter="small"
      >
        <Button
          circled
          size="small"
          type="secondary"
          iconLeft={<ChevronLeftIcon />}
          onClick={() => setSelectedMenuItem(menuItems.NONE)}
        />
        <Text>{translate("change_date_format")}</Text>
      </Stack>
      <Separator />
      <ListChoice
        title={currentDate.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
        onClick={() => changeClockFormat(formats.HOURS_MINUTES)}
        icon={
          hoursMinutesFormat === formats.HOURS_MINUTES ? (
            <CheckCircleIcon />
          ) : (
            <CircleEmptyIcon />
          )
        }
      />
      <ListChoice
        title={currentDate.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
        onClick={() => changeClockFormat(formats.HOURS_MINUTES_AM_PM)}
        icon={
          hoursMinutesFormat === formats.HOURS_MINUTES_AM_PM ? (
            <CheckCircleIcon />
          ) : (
            <CircleEmptyIcon />
          )
        }
      />
    </>
  );
};

export default DateTimeMenu;
