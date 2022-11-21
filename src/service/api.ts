import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://3.15.169.95:8081/v1/',
})