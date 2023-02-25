import { api } from 'services/api'

export const registerCall = (data) => api.post('/user', data)

export const loginCall = (data) => api.post('/login', data)

export const forgotPasswordCall = (data) => api.post('/forgot-password', data)

export const resetPasswordCall = (data) => api.post('/reset-password', data)
