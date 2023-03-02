import { api } from 'services/api'

export const getCategories = () =>
  api.get('/category', {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
