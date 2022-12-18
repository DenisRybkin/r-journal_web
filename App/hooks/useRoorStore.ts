import { useContext } from "react";
import { RootStoreContext } from "../contexts/rootStoreContext";
import { InternalExceptionsKeys } from "../constants/exceptions/internalExceptionsKeys";

export const useRootStore = () => {
  const context = useContext(RootStoreContext);

  if (context === undefined)
    throw new Error(InternalExceptionsKeys.connectRootStore);

  return context;
};
