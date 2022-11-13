import React, { useState } from "react";
import { SideCommentsView } from "./SideCommentsView";

export const SideComments = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleToggleVisible = () => setIsVisible(!isVisible);

  return (
    <SideCommentsView
      isVisible={isVisible}
      onChangeVisible={handleToggleVisible}
    />
  );
};
