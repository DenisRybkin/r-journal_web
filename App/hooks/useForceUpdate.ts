import { useState } from "react";

interface IUseForceUpdate {
  forceUpdate: () => void;
}

export const useForceUpdate = (): IUseForceUpdate => {
  const [state, setState] = useState<number>(0);

  const forceUpdate = () => setState((prev) => prev + 1);

  return { forceUpdate };
};
