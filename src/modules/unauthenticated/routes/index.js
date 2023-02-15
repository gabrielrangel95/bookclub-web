import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen
} from '../screens'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/signup',
    element: <RegisterScreen />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordScreen />
  },
  {
    path: '/reset-password',
    element: <ResetPasswordScreen />
  }
]
