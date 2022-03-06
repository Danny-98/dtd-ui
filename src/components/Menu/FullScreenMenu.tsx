import React from "react";
import { useMenu } from "./hooks";

const FullScreen: React.FC = ({ children }) => {
  const { onToggle, activeClass } = useMenu();
  return (
    <div className={`container-menu ${activeClass}`}>
      <div onClick={onToggle} className="toggle-button">
        <div className="bar"></div>
      </div>
      <div className={`menu-overplay bg-opacity-1 ${activeClass}`}>
        <ul>{children}</ul>
      </div>
    </div>
  );
};

export const MenuItem: React.FC = ({ children }) => {
  return (
    <li>
      <a className="text-white" href="#">
        {children}
      </a>
    </li>
  );
};
export default FullScreen;
