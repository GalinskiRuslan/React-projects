import React from "react";
import cl from "./Modal.module.css";

const Modal = ({ children, visible, serVisible }) => {
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => serVisible(false)}>
      <div className={cl.content} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
