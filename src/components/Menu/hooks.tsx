import { useCallback, useState } from "react";

export const useMenu = () => {
  const [active, setActive] = useState<boolean>(false);
  const [activeClass, setActiveClass] = useState<string>("in-active");

  const onToggle = useCallback(() => {
    setActive(!active);
    let changeClass = active ? "active" : "in-active";
    setActiveClass(changeClass);
  }, [active, activeClass]);
  return {
    active,
    activeClass,
    onToggle,
  };
};
