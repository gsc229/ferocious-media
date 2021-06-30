import axios from 'axios'
const baseURL = process.env.REACT_APP_PROPERTIES_API

const axiosRequest = () =>  {
  //const token = localStorage.getItem('token')
  
  return axios.create({
  baseURL: "/www.nowhere", // currently blocked by CORS policy
  headers: {
    //Authorization: token ? `Token ${token}` : '',    
    Accept: 'application/json',
    
  },
  responseType: 'json'
  
})}

export default axiosRequest