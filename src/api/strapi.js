import axios from 'axios'

const API_URL = 'http://192.168.20.48'

export default axios.create({
  baseURL: API_URL,
  // headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
})
