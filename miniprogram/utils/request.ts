import { requestType } from "../types/common";
import { FIXED_KEY, ROOT_URL } from "../config/config";

const {
  miniProgram: {
    envVersion
  }
} = wx.getAccountInfoSync();

let baseUrl = '';
switch (envVersion) {
  // 开发版
  case 'develop':
    baseUrl = ROOT_URL.development
    break;
  // 体验版
  case 'trial':
    baseUrl = ROOT_URL.production
    break;
  // 线上版
  default:
    baseUrl = ROOT_URL.production
    break;
}

const http = ({
  url = '',
  param = {},
  method = 'get',
  ...other
} = {}): Promise<Object> => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: param,
      method: method as WechatMiniprogram.RequestOption['method'],
      header: {
        'content-type': 'application/json',
        'project': FIXED_KEY.projectName
      },
      ...other,
      success: (res: requestType) => {
        const data = res.data
        if (res.errMsg === 'request:ok') {
          if (data.code === 200) {
            resolve(data)
          } else {
            if (data.msg) {
              wx.showToast({
                title: data.msg,
                icon: 'none',
                duration: 3000
              })
            }
            reject(res.data)
          }
        } else {
          reject(res)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}



const getUrl = (url: string) => {
  if (url.indexOf('://') === -1) {
    url = baseUrl + url
  }
  return url
}

// get方法
const Get = (url: string, param = {}) => {
  return http({
    url,
    param,
  })
}

const Post = (url: string, param = {}) => {
  return http({
    url,
    param,
    method: 'post'
  })
}

const Put = (url: string, param = {}) => {
  return http({
    url,
    param,
    method: 'put'
  })
}

const Delete = (url: string, param = {}) => {
  return http({
    url,
    param,
    method: 'put'
  })
}


export default {
  baseUrl,
  Get,
  Post,
  Put,
  Delete
}