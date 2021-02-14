import React, { useState } from "react";
import { Input, InputProps } from "react-native-elements";

import { formatNumberByMask } from "../../utils/text";

interface MaskedInputProps extends InputProps {
  mask: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  mask,
  value,
  onChangeText,
  ...rest
}) => {
  const [maskedValue, setMaskedValue] = useState("");

  const handleOnChange = (value: string) => {
    const { formattedValue, rawValue } = formatNumberByMask(value, mask);

    setMaskedValue(formattedValue);
    onChangeText && onChangeText(rawValue);
  };

  return (
    <Input
      value={maskedValue}
      onChangeText={(value) => handleOnChange(value)}
      keyboardType="number-pad"
      {...rest}
    />
  );
};

export default MaskedInput;
