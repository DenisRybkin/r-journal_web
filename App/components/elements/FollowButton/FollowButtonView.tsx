import React from "react";
import AddIcon from "@material-ui/icons/AddOutlined";
import CheckIcon from "@material-ui/icons/CheckOutlined";
import { Button } from "@material-ui/core";
import { IFollowButtonView } from "./followButton.interface";

export const FollowButtonView = (props: IFollowButtonView) => {
  return (
    <Button
      onClick={props.onClick}
      variant="contained"
      style={{ minWidth: 30, width: 35, height: 30 }}
    >
      {!props.isFollowed ? (
        <AddIcon />
      ) : (
        <CheckIcon style={{ fontSize: 20, color: "#2ea83a" }} />
      )}
    </Button>
  );
};
