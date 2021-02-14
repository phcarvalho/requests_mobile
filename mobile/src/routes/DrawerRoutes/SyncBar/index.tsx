import React from "react";
import { Text } from "react-native-elements";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootState } from "../../../stores/modules/rootReducer";

import { RowView, SyncButton, SyncContainer } from "./styles";
import { ConnectionStatus, SyncStatus } from "../../../stores/modules/sync";
import { ActivityIndicator, View } from "react-native";

const SyncBar: React.FC = () => {
  const { connectionStatus, lastSync, status } = useSelector(
    (state: RootState) => state.sync
  );

  return (
    <SyncContainer>
      <RowView>
        <SyncButton disabled={status === SyncStatus.Syncing}>
          {status !== SyncStatus.Syncing ? (
            <MaterialCommunityIcons name="sync" size={35} color="#666" />
          ) : (
            <ActivityIndicator size="small" color="#666" />
          )}
        </SyncButton>
        <View>
          <RowView>
            <MaterialCommunityIcons
              name={status === SyncStatus.NotSynced ? "sync-alert" : "sync"}
              size={20}
            />
            <Text> {status}</Text>
          </RowView>
          <RowView>
            <MaterialCommunityIcons name={"calendar-sync"} size={20} />
            <Text> {lastSync}</Text>
          </RowView>
        </View>
      </RowView>
    </SyncContainer>
  );
};

export default SyncBar;
