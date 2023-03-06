import { api } from 'services/api'

export const addBookToFavorites = (data) =>
  api.post('/userbook', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const deleteBookFromFavorites = (id) =>
  api.delete(`/userbook/${id}`, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
