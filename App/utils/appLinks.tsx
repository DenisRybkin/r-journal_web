import {
  FormatListBulletedOutlined as ListIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  WhatshotOutlined as FireIcon,
} from "@material-ui/icons";
import React from "react";

export interface IMenuLink {
  text: string;
  path: string;
  icon: JSX.Element;
}

export const menuLinks: IMenuLink[] = [
  { text: "ui:side_menu.feed", icon: <FireIcon />, path: "/" },
  { text: "ui:side_menu.messages", icon: <MessageIcon />, path: "/messages" },
  { text: "ui:side_menu.rating", icon: <TrendingIcon />, path: "/rating" },
  { text: "ui:side_menu.subscriptions", icon: <ListIcon />, path: "/follows" },
];
