import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://18.191.221.144:8081/v1/',
})