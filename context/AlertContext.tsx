import { createContext, useCallback, useContext, useState } from 'react'

import { Alert as IAlert } from 'interfaces/Alert'
import AuthContext from './AuthContext'
import Alert from 'components/Alert'

export type AlertContext = {
  alert: IAlert
  closeAlert: () => void
  setAlert: (args: IAlert) => void
}

const defaultAlert: IAlert = {
  title: '',
  message: '',
  closeText: 'Close',
  confirmText: '',
  isOpen: false,
  type: 'success',
  onClose: () => {},
  onConfirm: () => {},
}

const AlertContext = createContext<AlertContext>({
  alert: defaultAlert,
  closeAlert: () => {},
  setAlert: () => {},
})

export const useAlertContext = () => useContext(AlertContext)

export type AlertProviderProps = {
  children: React.ReactNode
}

export const AlertProvider = ({ children }) => {
  const [alert, setAlertData] = useState<IAlert>({ ...defaultAlert })

  const closeAlert = () => {
    setAlertData((prevState) => ({
      ...prevState,
      isOpen: false,
    }))
  }

  const setAlert = useCallback((args: IAlert) => {
    setAlertData({
      ...args,
      isOpen: true,
      closeText: args.closeText || 'Close',
      onClose: args.onClose || closeAlert,
      onConfirm: args.onConfirm || closeAlert,
    })
  }, [])

  return (
    <AlertContext.Provider value={{ alert, closeAlert, setAlert }}>
      <Alert alert={alert} closeAlert={closeAlert} />
      {children}
    </AlertContext.Provider>
  )
}

export default AuthContext
