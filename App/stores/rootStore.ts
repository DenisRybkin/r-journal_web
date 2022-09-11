import { makeAutoObservable } from "mobx";
import { AppStore } from "./appStore";

export class RootStore {
  appStore: AppStore;

  constructor() {
    makeAutoObservable(this);
    this.appStore = new AppStore(this);
  }
}

export const rootStore = new RootStore();
