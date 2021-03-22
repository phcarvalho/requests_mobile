import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./stores/modules/rootReducer";
import { syncFetchData } from "./stores/modules/sync";

import DrawerRoutes from "./routes/DrawerRoutes";
import Login from "./pages/Login";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const { isSigned, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isSigned) {
      dispatch(syncFetchData(user.CodigoDoRepresentante));
    }
  }, [isSigned]);

  if (isSigned) {
    return <DrawerRoutes />;
  }

  return <Login />;
};

export default Main;
