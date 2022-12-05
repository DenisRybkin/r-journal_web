import { MutableRefObject, useEffect, useRef, useState } from "react";

interface IUseViewportObserver {
  isVisable: boolean;
}

const defaultObserverOptionsInit: IntersectionObserverInit = {
  root: null,
  threshold: 0,
};

export const useViewportObserver = <T>(
  trigerRef: MutableRefObject<Element | null>,
  options?: IntersectionObserverInit
): IUseViewportObserver => {
  useRef();
  const [isVisable, setVisable] = useState<boolean>(false);

  const observer: IntersectionObserver = new IntersectionObserver(
    ([entry]) => setVisable(entry.isIntersecting),
    defaultObserverOptionsInit ?? options
  );

  useEffect(() => {
    trigerRef?.current && observer.observe(trigerRef?.current);
    return () => observer.disconnect();
  }, [trigerRef?.current]);

  return {
    isVisable,
  };
};
