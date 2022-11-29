import { MutableRefObject } from "react";

export interface IScrollTriger {
  options?: IntersectionObserverInit;
  disabled?: boolean;
  hidden?: boolean;
  mt?: number | boolean;
  onClick?: () => void;
  onIntersection: () => void;
}

export interface IScrollTrigerView extends IScrollTriger {
  onClick: () => void;
  triggerRef: MutableRefObject<Element | null>;
}
