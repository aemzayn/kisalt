import { createContext, useCallback, useContext, useState } from "react";

import { Alert } from "interfaces/Alert";
import AuthContext from "./AuthContext";

export type AlertContext = {
  alert: Alert;
  closeAlert: () => void;
  showAlert: any;
};

const defaultAlert: Alert = {
  title: "",
  message: "",
  closeText: "Close",
  confirmText: "",
  isOpen: false,
  type: "success",
  onClose: () => {},
  onConfirm: () => {},
};

const AlertContext = createContext<AlertContext>({
  alert: defaultAlert,
  closeAlert: () => {},
  showAlert: () => {},
});

export const useAlertContext = () => useContext(AlertContext);

export type AlertProviderProps = {
  children: React.ReactNode;
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState<Alert>({ ...defaultAlert });

  const closeAlert = () => {
    setAlert((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  };

  const showAlert = useCallback((args: Alert) => {
    setAlert({
      ...args,
      isOpen: true,
      closeText: args.closeText || "Close",
      onClose: args.onClose || closeAlert,
      onConfirm: args.onConfirm || (() => {}),
    });
  }, []);

  return (
    <AlertContext.Provider value={{ alert, closeAlert: closeAlert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AuthContext;
