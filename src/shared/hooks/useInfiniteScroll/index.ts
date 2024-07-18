import { useEffect } from "react";

export const useInfiniteScroll = (onScroll: Function) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 <
        document.documentElement.offsetHeight
      ) {
        return;
      }

      onScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);
};
