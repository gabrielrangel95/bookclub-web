import { api } from 'services/api'

export const getAuthorDetail = (id) =>
  api.get(`/author/${id}`, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
