import { Mutex, Semaphore } from "async-mutex";

export const mutexLocker: Mutex = new Mutex();
export const semaphoreLockerCreator = (initValue: number): Semaphore =>
  new Semaphore(initValue);
