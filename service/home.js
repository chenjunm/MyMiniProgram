import request from './network.js'
import imgs from './img.js'
const baseURL  = 'http://123.207.32.32:8000'

export  function getMultiData(){
  return request(
    {
      url: baseURL + '/home/multidata'
    }
  )
}

export function getGoodData(type, page){
  // return request(
  //   {
  //     url:'',
  //     data:{
  //       type,
  //       page
  //     }
  //   }
  // )
  return imgs[type]
}