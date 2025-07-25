import axios from 'axios'
import { POKEMON_API_BASE_URL } from '../../constants/pokemonConstants'

export const api = axios.create({
  baseURL: POKEMON_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 404) {
      console.error('Resource not found:', error.response?.data)
    } else if (error.response?.status >= 500) {
      console.error('Server error:', error.response.data)
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout')
    }

    return Promise.reject(error)
  }
)
