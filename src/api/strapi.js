import axios from 'axios'

export default axios.create({
  baseURL: 'https://geoapp-apiv2.herokuapp.com',
  // headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
})
