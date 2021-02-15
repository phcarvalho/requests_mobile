import React from "react";
import styled from "styled-components/native";
import { SyncStatus } from "../../stores/modules/sync";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const SyncContainer = styled.View`
  padding: 10px;
  background: #ddd;
`;

export const SyncButton = styled.TouchableOpacity`
  width: 40px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

interface SyncStatusIconProps {
  status: SyncStatus;
}

export const SyncStatusIcon: React.FC<SyncStatusIconProps> = ({ status }) => {
  let icon = {
    color: "#666",
    name: "sync",
  };

  if (status === SyncStatus.Synced) {
    icon.color = "#348025";
    icon.name = "check";
  } else if (status === SyncStatus.NotSynced) {
    icon.color = "#ff2f02";
    icon.name = "alert-circle";
  }

  return (
    <MaterialCommunityIcons
      size={18}
      color={icon.color}
      name={icon.name as any}
    />
  );
};
