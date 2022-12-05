import { makeAutoObservable } from "mobx";
import { AppStore } from "./appStore";
import { NotifierStore } from "./notifierStore";

export class RootStore {
  public appStore: AppStore;
  public notifierStore: NotifierStore;

  constructor() {
    makeAutoObservable(this);
    this.appStore = new AppStore(this);
    this.notifierStore = new NotifierStore(this);
  }
}

export const rootStore = new RootStore();
