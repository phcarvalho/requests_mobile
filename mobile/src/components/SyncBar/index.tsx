import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import { Text, ThemeProvider } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootState } from "../../stores/modules/rootReducer";
import {
  syncCreate,
  syncFetchData,
  SyncStatus,
} from "../../stores/modules/sync";

import { RowView } from "../Common";
import { SyncButton, SyncContainer, SyncStatusIcon } from "./styles";

import syncTheme from "./theme";

const SyncBar: React.FC = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { lastSync, status } = useSelector((state: RootState) => state.sync);

  const handleSync = async () => {
    await Promise.all([dispatch(syncFetchData(user.CodigoDoRepresentante))]);

    await Promise.all([dispatch(syncCreate(user.CodigoDoRepresentante))]);
  };

  return (
    <SyncContainer>
      <ThemeProvider theme={syncTheme}>
        <RowView>
          <SyncButton
            disabled={status === SyncStatus.Syncing}
            onPress={handleSync}
          >
            {status !== SyncStatus.Syncing ? (
              <MaterialCommunityIcons name="sync" size={35} color="#666" />
            ) : (
              <ActivityIndicator size="small" color="#666" />
            )}
          </SyncButton>
          <View>
            <RowView>
              <SyncStatusIcon status={status} />
              <Text>{" " + status}</Text>
            </RowView>
            <RowView>
              <MaterialCommunityIcons
                name="calendar-check"
                size={18}
                color="#666"
              />
              <Text>{" " + lastSync}</Text>
            </RowView>
          </View>
        </RowView>
      </ThemeProvider>
    </SyncContainer>
  );
};

export default SyncBar;
