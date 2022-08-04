import React, { useEffect, useRef } from "react";
import { ClickOutsideProps } from "./click-outside.types";

function useOutsideAlerter(ref: any, callback: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export const ClickOutside: React.FC<ClickOutsideProps> = ({ children, callback, id }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, callback);

  return (
    <div id={id} ref={wrapperRef}>
      {children}
    </div>
  );
};

ClickOutside.displayName = "ClickOutside";
