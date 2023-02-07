import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://18.219.161.110:8081/v1/',
})

export const apiPrivate = axios.create({
    baseURL: 'http://18.219.161.110:8081/v1/',
    headers:{
        'x-api-key': `Bearer ${JSON.parse(String(localStorage.getItem('@userInfo')))?.token}`,
    }
})
