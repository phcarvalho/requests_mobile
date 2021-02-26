import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonContainer } from "./styles";

interface ArrowButtonProps {
  handleClick: () => void;
  isArrowUp: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  handleClick,
  isArrowUp,
}) => {
  return (
    <ButtonContainer onPress={() => handleClick()}>
      <MaterialIcons
        name={isArrowUp ? "keyboard-arrow-up" : "keyboard-arrow-down"}
        size={15}
        color="#fff"
      />
    </ButtonContainer>
  );
};

export default ArrowButton;
