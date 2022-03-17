import { useState } from "react";

export type AlertNotification = {
  status?: string;
  message: string;
  duration?: number;
  active?: string;
};

const useAlertNotification = () => {
  const [active, setActive] = useState("in-active");
  const [content, setContent] = useState<AlertNotification>({
    duration: 2000,
    message: "",
    status: "success",
  });
  let timeKey: any = 0;
  const onShowAlert = (newContent: AlertNotification) => {
    if (active === "in-active") {
      setContent(newContent);
      setActive("active");
    }
    if (timeKey !== 0) {
      clearTimeout(timeKey);
    } else {
      timeKey = setTimeout(() => {
        setActive("in-active");
      }, 2000);
    }
  };

  return {
    active,
    message: content.message,
    onShowAlert,
  };
};

export default useAlertNotification;
