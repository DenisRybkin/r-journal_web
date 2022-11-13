import React, { useState } from "react";
import { IComment } from "./сomment.interface";
import { CommentView } from "./CommentView";

export const Comment = (props: IComment) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<
    null | Element | ((element: Element) => Element)
  >(null);

  const handleClickOpenMenuTrigger = (event) =>
    setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleDeleteComment = async () => {};

  const handleTurnOnIsEditMode = () => setIsEditMode(true);
  const handleOffIsEditMode = () => setIsEditMode(false);

  return (
    <CommentView
      {...props}
      anchorEl={anchorEl}
      isEditMode={isEditMode}
      onClickOpenMenuTrigger={handleClickOpenMenuTrigger}
      onCloseMenu={handleCloseMenu}
      onOffIsEditMode={handleOffIsEditMode}
      onTurnOnIsEditMode={handleTurnOnIsEditMode}
      onDeleteComment={handleDeleteComment}
    />
  );
};
