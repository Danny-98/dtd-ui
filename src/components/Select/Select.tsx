import React from "react";
import { useMenu } from "../Menu/hooks";

type SelectProps = {
  value: string;
};

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

export default Select;
