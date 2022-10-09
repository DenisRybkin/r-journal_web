import React from "react";
import { RootStoreContext } from "../../../../contexts/rootStoreContext";
import { useStore } from "./useStore";
import { IStoreProvider } from "./storeProvider.interface";

export const StoreProvider: React.FC<IStoreProvider> = (props) => {
  const store = useStore(props.pageProps);

  return (
    <RootStoreContext.Provider value={store}>
      {props.children}
    </RootStoreContext.Provider>
  );
};
