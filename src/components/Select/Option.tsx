import React from "react";
type OptionProps = {};

const Option: React.FC<OptionProps> = ({ children }) => {
  return <div className="select-option">{children}</div>;
};

export default Option;
