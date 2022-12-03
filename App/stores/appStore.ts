import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";
import { LocalStorageKeys } from "../constants/localStorageKeys";
import { LocalStorageHelper } from "../helpers/localStorageHelper";
import { AppLocaleKyes, AppLocaleType } from "../types/locale";
import i18next from "i18next";

export class AppStore {
  root: RootStore;

  private isOpenSidebar: boolean;
  private appLocale: AppLocaleType;

  constructor(root?: RootStore) {
    makeAutoObservable(this);
    //this.root = root;
    this.isOpenSidebar =
      LocalStorageHelper.get(LocalStorageKeys.isOpenSidebar) ?? true;
    this.appLocale =
      LocalStorageHelper.get(LocalStorageKeys.appLocale) ??
      (i18next.language as AppLocaleType) ??
      AppLocaleKyes.ru;
  }

  get getIsOpenSidebar(): boolean {
    return this.isOpenSidebar;
  }

  get getAppLocale(): AppLocaleType {
    return this.appLocale;
  }

  setIsOpenSidebar(newValue: boolean): void {
    LocalStorageHelper.set(LocalStorageKeys.isOpenSidebar, newValue);
    this.isOpenSidebar = newValue;
  }

  setAppLocale(newValue: AppLocaleType) {
    LocalStorageHelper.set(LocalStorageKeys.appLocale, newValue);
    this.appLocale = newValue;
  }

  toggleIsOpenSidebar(): void {
    this.setIsOpenSidebar(!this.isOpenSidebar);
  }
}

export const testStore = new AppStore();
