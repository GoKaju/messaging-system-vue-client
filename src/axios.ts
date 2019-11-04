import axios from 'axios'
import constant from '@/constants'


export const http = axios.create({
  baseURL: constant.API,
  withCredentials: true,
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  }
})
