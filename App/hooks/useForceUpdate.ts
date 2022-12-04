import { useState } from "react";

interface IUseForceUpdate {
  forceUpdate: () => void;
}

export const useForceUpdate = (): IUseForceUpdate => {
  const [_, setState] = useState<number>(0);

  const forceUpdate = (): void => setState((prev) => prev + 1);

  return { forceUpdate };
};
