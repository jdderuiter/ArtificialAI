import axios from 'axios'
import endpoints from './endpoints'

const API = axios.create({
    baseURL: endpoints.API_BASE_URL,
})

export default API
