import React from "react";
import { IPostContextMenuControl } from "./postContextMenuControl.interface";
import { useTranslation } from "react-i18next";
import { IContextMenuItem } from "../../../types/contextMenu.interface";
import { ContextMenu } from "../../ContextMenu";

export const PostContextMenuControl: React.FC<IPostContextMenuControl> = (
  props
) => {
  const { t } = useTranslation();

  const menuItems: IContextMenuItem[] = [
    {
      id: 1,
      text: t("ui:context_menu.comment"),
      action: props.onComment,
    },
    {
      id: 2,
      text: t("ui:context_menu.repost"),
      action: props.onRepost,
    },
    {
      id: 3,
      text: t("ui:context_menu.add_to_favorite"),
      action: props.onAddToFavorite,
    },
    {
      id: 4,
      text: t("ui:context_menu.share"),
      action: props.onShare,
    },
  ];

  return <ContextMenu menuItems={menuItems}>{props.children}</ContextMenu>;
};
