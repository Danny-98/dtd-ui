import React from "react";

type LayerItem = {
  layerColor?: string;
  href?: string;
};

export const LayerSocialIcon: React.FC = ({ children }) => {
  return <ul className="layer-container">{children}</ul>;
};

export const LayerItem: React.FC<LayerItem> = ({
  layerColor = "bg-fackbook",
  children,
  href = "#",
}) => {
  return (
    <li className="layer-item">
      <a href={href}>
        <span className={layerColor}></span>
        <span className={layerColor}></span>
        <span className={layerColor}></span>
        <span className={layerColor}>{children}</span>
      </a>
    </li>
  );
};
