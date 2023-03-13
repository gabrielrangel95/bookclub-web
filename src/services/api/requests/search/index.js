import { api } from 'services/api'

export const searchQuery = (query) =>
  api.get(`search?name=${query}`, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
