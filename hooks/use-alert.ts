import React, { useState } from "react";

interface Alertype {
  show: boolean;
  text: string;
  type: string;
}

interface ShowAlertProps {
  text: string;
  type: string;
  show: boolean;
}

export const useAlert = () => {
  const [alert, setAlert] = useState<Alertype>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: ShowAlertProps) =>
    setAlert({
      show: true,
      text,
      type,
    });

  const hideAlert = () =>
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });

  return { alert, showAlert, hideAlert };
};
