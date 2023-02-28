import { api } from 'services/api'

export const getHighlightedBooks = () =>
  api.get('/book?highlighted=true', {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
