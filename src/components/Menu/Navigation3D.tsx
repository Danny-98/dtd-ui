import React from "react";
import { useMenu } from "./hooks";

type Navigation3D = {};

const Navigation3D: React.FC<Navigation3D> = ({children}) => {
  const { onToggle, activeClass } = useMenu();
  return (
    <nav className={`navbar-3d ${activeClass}`}>
      <p className="navbar-3d-brand">Your Brand</p>
      <div onClick={onToggle} className="toggle-button">
        <div className="bar"></div>
      </div>
      
    </nav>
  );
};

export default Navigation3D;
