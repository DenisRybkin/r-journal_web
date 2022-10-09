import React from "react";
import { IContentLayout } from "./contentLayout.interface";
import { ContentLayoutView } from "./ContentLayoutView";
import { useRootStore } from "../../../hooks/useRoorStore";
import { observer } from "mobx-react-lite";
import { testStore } from "../../../stores/appStore";

const ContentLayoutObserver: React.FC<IContentLayout> = (props) => {
  const { appStore } = useRootStore();

  return (
    <ContentLayoutView
      {...props}
      hideMenu={props.hideMenu || !appStore.getIsOpenSidebar}
    />
  );
};

export const ContentLayout = observer(ContentLayoutObserver);
