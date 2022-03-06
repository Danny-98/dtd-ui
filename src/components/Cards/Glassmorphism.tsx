import React from "react";

type GlassmorphismCard = {
  idNumber: string;
  title: string;
  content: string;
  href?: string;
  buttonText?: string;
};

export const GlassmorphismContainer: React.FC = ({ children }) => {
  return <div className="glassmorphism-card-container">{children}</div>;
};

export const GlassmorphismCard: React.FC<GlassmorphismCard> = ({
  idNumber,
  title,
  content,
  buttonText = "Read More",
  href = "#",
}) => {
  return (
    <div className="glassmorphism-card">
      <div className="glassmorphism-card-content">
        <h2>{idNumber}</h2>
        <h3>{title}</h3>
        <p>{content}</p>
        <a href={href}>{buttonText}</a>
      </div>
    </div>
  );
};
