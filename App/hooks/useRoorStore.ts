import { useContext } from "react";
import { RootStoreContext } from "../contexts/rootStoreContext";
import { InternalExceptions } from "../constants/internalExceptions";

export const useRootStore = () => {
  const context = useContext(RootStoreContext);

  if (context === undefined)
    throw new Error(InternalExceptions.connectRootStore);

  return context;
};
