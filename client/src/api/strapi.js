import axios from 'axios'

export default axios.create({
  baseURL: 'https://geoapp2.herokuapp.com/',
  // headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
})
