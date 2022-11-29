import React, { useEffect, useRef } from "react";
import { IScrollTriger } from "./scrollTriger.interface";
import { useViewportObserver } from "../../../hooks/useViewportObserver";
import { ScrollTrigerView } from "./ScrollTrigerView";

export const ScrollTriger = (props: IScrollTriger) => {
  const triggerRef = useRef<Element>();
  const { isVisable } = useViewportObserver(triggerRef, props.options);

  const handleClick = () => props.onClick && props.onClick();

  useEffect(
    () => isVisable && !props.disabled && props.onIntersection(),
    [isVisable]
  );

  return (
    <ScrollTrigerView
      onClick={handleClick}
      triggerRef={triggerRef}
      {...props}
    />
  );
};
