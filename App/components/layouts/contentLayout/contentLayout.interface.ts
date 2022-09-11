import React from "react";

export interface IContentLayout {
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
  hideMenu?: boolean;
  children?: React.ReactNode;
}

export interface IContentLayoutView {
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
  hideMenu?: boolean;
  children?: React.ReactNode;
}
