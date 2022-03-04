import PrivateRoute from 'components/Route/PrivateRoute'
import { login } from 'constants/paths'
import Dashboard from './Dashboard'

export type DashboardWrapperProps = {}

export default function DashboardWrapper({}: DashboardWrapperProps) {
  return (
    <PrivateRoute redirectPath={login}>
      <Dashboard />
    </PrivateRoute>
  )
}
