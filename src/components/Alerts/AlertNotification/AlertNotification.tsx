import React from "react";
import { AlertNotification } from "./hook";

const NotificationAlert: React.FC<AlertNotification> = ({
  message,
  active,
}) => {
  return (
    <div className={`alert-notification ${active}`}>
      <span className="notifyType">{message}</span>
    </div>
  );
};

export default NotificationAlert;
