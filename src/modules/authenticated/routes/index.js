import { HomeScreen, BookDetailScreen } from '../screens'

export const authRoutes = [
  {
    path: '/home',
    element: <HomeScreen />
  },
  {
    path: '/book-detail/:id',
    element: <BookDetailScreen />
  }
]
