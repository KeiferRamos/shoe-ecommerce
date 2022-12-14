import React, { useRef, useEffect } from "react";

function Modal({ closeModal, children, className = "" }) {
  const ref = useRef({} as HTMLDivElement);

  useEffect(() => {
    function closeModalOnClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    }

    document.addEventListener("mousedown", (e) => closeModalOnClick(e));
    return () =>
      document.removeEventListener("mousedown", (e) => closeModalOnClick(e));
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default Modal;
