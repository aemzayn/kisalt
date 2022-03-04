import PublicRoute from 'components/Route/PublicRoute'
import { dashboard } from 'constants/paths'
import AuthForm from '../AuthForm/AuthForm'

export type RegisterWrapperProps = {}

export default function RegisterWrapper({}: RegisterWrapperProps) {
  return (
    <PublicRoute redirectPath={dashboard}>
      <AuthForm formType="register" />
    </PublicRoute>
  )
}
