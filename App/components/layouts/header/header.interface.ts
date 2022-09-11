export interface IHeader {}

export interface IHeaderView {
  isAuth?: boolean;
  onOpenAuthDialog: () => void;
  toggleSidebar: () => void;
}
