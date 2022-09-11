import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";
import { LocalStorageKeys } from "../constants/localStorageKeys";
import { LocalStorageHelper } from "../helpers/localStorageHelper";

export class AppStore {
  root: RootStore;

  private isOpenSidebar: boolean;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    console.log(this);
    this.root = root;
    this.isOpenSidebar =
      LocalStorageHelper.get(LocalStorageKeys.isOpenSidebar) ?? true;
  }

  get getIsOpenSidebar(): boolean {
    return this.isOpenSidebar;
  }

  setIsOpenSidebar(newValue: boolean): void {
    LocalStorageHelper.set(LocalStorageKeys.isOpenSidebar, newValue);
    this.isOpenSidebar = newValue;
  }

  toggleIsOpenSidebar(): void {
    console.log(44444);
    LocalStorageHelper.set(LocalStorageKeys.isOpenSidebar, !this.isOpenSidebar);
    this.isOpenSidebar = !this.isOpenSidebar;
    console.log(this.isOpenSidebar);
  }
}
