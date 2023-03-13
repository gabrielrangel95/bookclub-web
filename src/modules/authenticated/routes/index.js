import {
  HomeScreen,
  BookDetailScreen,
  FavoritesScreen,
  SearchScreen
} from '../screens'

export const authRoutes = [
  {
    path: '/home',
    element: <HomeScreen />
  },
  {
    path: '/book-detail/:id',
    element: <BookDetailScreen />
  },
  {
    path: '/favorites',
    element: <FavoritesScreen />
  },
  {
    path: '/search',
    element: <SearchScreen />
  }
]
