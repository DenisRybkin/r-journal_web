export interface IPostActions {}

export interface IPostActionsView {
  onComment: () => void;
  onRepost: () => void;
  onAddToFavorite: () => void;
  onShare: () => void;
}
