import { useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  isShow: boolean;
  children: React.ReactNode;
}

export const Portal = ({ isShow, children }: PortalProps) => {
  useEffect(() => {
    document.body.classList.toggle('scroll-hide', isShow);
  }, [isShow]);

  if (!isShow) {
    return null;
  }
  return createPortal(children, document.querySelector('#portal') || document.body);
};
