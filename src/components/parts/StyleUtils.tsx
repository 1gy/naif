import { useEffect, VFC } from "react";

export const StyleUtils: VFC = () => {
  useEffect(() => {
    const listener = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`,
      );
    };
    window.addEventListener("resize", listener);
    listener();
    return () => window.removeEventListener("resize", listener);
  }, []);
  return <></>;
};
