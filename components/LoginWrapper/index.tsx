import PublicRoute from 'components/Route/PublicRoute'
import { dashboard } from 'constants/paths'
import AuthForm from '../AuthForm/AuthForm'

export type LoginWrapperProps = {}

export default function LoginWrapper({}: LoginWrapperProps) {
  return (
    <PublicRoute redirectPath={dashboard}>
      <AuthForm formType="login" />
    </PublicRoute>
  )
}
