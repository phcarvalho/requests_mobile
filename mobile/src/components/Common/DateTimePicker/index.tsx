import React, { useState } from "react";
import { Platform } from "react-native";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { DateTime } from "luxon";

import { DTPickerContainer, TitleText, ErrorText, DateText } from "./styles";

interface DateTimePickerProps {
  title?: string;
  errorMessage?: string;
  value: Date;
  onDateChange: (date: Date) => void;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  title,
  value,
  errorMessage,
  onDateChange,
}) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");

  const handleDateChange = (selectedDate?: Date) => {
    if (!selectedDate) {
      setShow(false);
      setMode("date");

      return;
    }

    setShow(false);
    onDateChange(selectedDate);

    if (mode === "date") {
      setMode("time");
      setShow(true);
    } else {
      setMode("date");
    }
  };

  return (
    <DTPickerContainer>
      {title && <TitleText>{title}</TitleText>}
      <TouchableOpacity onPress={() => setShow(true)}>
        <DateText>
          {DateTime.fromJSDate(value)
            .setLocale("pt-br")
            .toFormat("dd/LL/yyyy 'às' HH'h'mm'min'")}
        </DateText>
      </TouchableOpacity>
      {show && (
        <RNDateTimePicker
          mode={mode}
          value={value}
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={(e, selectedDate) => handleDateChange(selectedDate)}
          is24Hour={true}
        />
      )}
      <Divider style={{ height: 2 }} />
      <ErrorText>{errorMessage ?? ""}</ErrorText>
    </DTPickerContainer>
  );
};
