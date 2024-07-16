import React, { RefObject } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: Function,
  condition?: boolean
) => {
  React.useEffect(() => {
    if (condition === false) return;
    const handler: EventListener = (event) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement))
        callback();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, ref.current, callback, condition]);
};
