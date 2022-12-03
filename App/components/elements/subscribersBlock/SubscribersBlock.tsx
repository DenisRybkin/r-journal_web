import React from "react";
import { ISubscribersBlock } from "./subscribersBlock.interface";
import { SubscribersBlockView } from "./SubscribersBlockView";

export const SubscribersBlock = (props: ISubscribersBlock) => {
  return <SubscribersBlockView users={props.users} />;
};
