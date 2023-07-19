import React from "react";
import cl from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.content} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
