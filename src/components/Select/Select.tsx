import React from "react";
import { useMenu } from "../Menu/hooks";

type SelectProps = {
  value: string;
};
type OptionProps = {};
const Select: React.FC<SelectProps> = ({ children, value }) => {
  const { activeClass, onToggle } = useMenu();
  return (
    <div onClick={onToggle} className={`select-dtd-container ${activeClass}`}>
      <input
        value={value}
        className="select-textbox"
        type="text"
        placeholder="Select"
        readOnly
      />
      <div className="select-options">{children}</div>
    </div>
  );
};

export const Option: React.FC<OptionProps> = ({ children }) => {
  return <div className="select-option">{children}</div>;
};

export default Select;
