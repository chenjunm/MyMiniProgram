import request from './network.js'
const baseURL  = 'http://123.207.32.32:8000'
export  function getMultiData(){
  return request(
    {
      url: baseURL + '/home/multidata'
    }
  )
}