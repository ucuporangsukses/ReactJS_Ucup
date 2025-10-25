import { ReactNode } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

export const withPortal = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    return createPortal(<Component {...props} />, modalRoot);
  };
};
