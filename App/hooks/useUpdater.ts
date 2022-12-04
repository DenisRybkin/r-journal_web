import { useState } from "react";
import { IApiControllerCrud } from "../api/interfaces/apiControllerCrud";

export interface IUseUpdater<T> {
  update: () => Promise<void>;
  updatePartially: () => Promise<void>;
  setInitialState: (initialState: T) => void;
  applyChanges: (changes: Partial<T>) => void;
  currentState: T | null;
  beforeState: T | null;
  reset: () => void;
}

export interface IUseUpdateWithController<T> extends IUseUpdater<T> {}

const combineObjects = (a: any, b: any): any => ({ ...a, ...b });

export const useUpdater = <T>(
  onUpdate: (newState: T) => Promise<T | null>,
  onPartialUpdate: (newState: T, beforeState: T) => Promise<T | null>,
  onRequestEnd?: (r: T | null) => void,
  onError?: () => void
) => {
  // use when either update fails and it's needed to recover previous state
  const [beforeState, setBeforeState] = useState<T | null>(null);
  const [currentState, setCurrentState] = useState<T | null>(null);

  const handleResult = (r: T | null): void => {
    onRequestEnd && onRequestEnd(r);
    if (r == null) {
      setCurrentState(beforeState);
      return onError && onError();
    }
  };

  const update = async (): Promise<void> =>
    handleResult(await onUpdate(currentState!));

  const updatePartially = async (): Promise<void> =>
    handleResult(await onPartialUpdate(currentState!, beforeState!));

  const setInitialState = (initialState: T): void => {
    setCurrentState(initialState);
    setBeforeState(initialState);
  };

  const applyChanges = (changes: Partial<T>) =>
    setCurrentState(combineObjects(currentState, changes));

  const reset = () => {
    setBeforeState(null);
    setCurrentState(null);
  };

  return {
    update,
    updatePartially,
    setInitialState,
    applyChanges,
    currentState,
    beforeState,
    reset,
  };
};

export const useUpdateWithController = <T>(
  controller: IApiControllerCrud<T>,
  onRequestEnd?: (r: T | null) => void,
  params?: any,
  onError?: () => void,
  getIdPredicate?: (x: T) => number
) => {
  const getId = (x: T) => (getIdPredicate ? getIdPredicate(x) : (x as any).id);

  return useUpdater<T>(
    async (x) => await controller.edit(getId(x), x, params),
    async (x, y) => await controller.editPartially(getId(x), x, y, params),
    onRequestEnd,
    onError
  );
};
