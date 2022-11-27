import React from "react";
import { IPostContextMenuControl } from "./postContextMenuControl.interface";
import { useTranslation } from "react-i18next";
import { IContextMenuItem } from "../../../types/contextMenu.interface";
import { ContextMenu } from "../../ContextMenu";
import {
  BookmarkBorderOutlined as FavoriteIcon,
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  ShareOutlined as ShareIcon,
} from "@material-ui/icons";

export const PostContextMenuControl: React.FC<IPostContextMenuControl> = (
  props
) => {
  const { t } = useTranslation();

  const menuItems: IContextMenuItem[] = [
    {
      id: 1,
      icon: <CommentsIcon />,
      text: t("ui:context_menu.comment"),
      action: props.onComment,
    },
    {
      id: 2,
      icon: <RepostIcon />,
      text: t("ui:context_menu.repost"),
      action: props.onRepost,
    },
    {
      id: 3,
      icon: <FavoriteIcon />,
      text: t("ui:context_menu.add_to_favorite"),
      action: props.onAddToFavorite,
    },
    {
      id: 4,
      icon: <ShareIcon />,
      text: t("ui:context_menu.share"),
      action: props.onShare,
    },
  ];

  return <ContextMenu menuItems={menuItems}>{props.children}</ContextMenu>;
};
