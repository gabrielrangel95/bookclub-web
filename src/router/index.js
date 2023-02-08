import { createBrowserRouter } from 'react-router-dom'
import { unauthRoutes } from 'modules/unauthenticated/routes'

export const router = createBrowserRouter([...unauthRoutes])
