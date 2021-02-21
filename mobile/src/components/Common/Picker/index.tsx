import React from "react";
import { Picker as RNPicker } from "@react-native-picker/picker";
import { Divider } from "react-native-elements";

import { ErrorText, PickerContainer, TitleText } from "./styles";

export interface PickerItem {
  label: string;
  value: string;
}

interface PickerProps {
  title?: string;
  items: PickerItem[];
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  errorMessage?: string;
}

export const Picker: React.FC<PickerProps> = ({
  title,
  items,
  selectedValue,
  onValueChange,
  errorMessage,
}) => {
  return (
    <PickerContainer>
      {title && <TitleText>{title}</TitleText>}
      <RNPicker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => onValueChange(`${itemValue}`)}
        itemStyle={{
          fontSize: 18,
        }}
      >
        {items.map((item) => (
          <RNPicker.Item
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </RNPicker>
      <Divider style={{ height: 2 }} />
      <ErrorText>{errorMessage ?? ""}</ErrorText>
    </PickerContainer>
  );
};
