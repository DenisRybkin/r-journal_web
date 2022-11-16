export interface IContextMenu {
  onComment: () => void;
  onRepost: () => void;
  onAddToFavorite: () => void;
  onShare: () => void;
}

export interface IContextMenuView extends IContextMenu {}
