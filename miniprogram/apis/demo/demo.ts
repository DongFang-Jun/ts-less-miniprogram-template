import { INTERFACE_URL } from "../../config/interface"
import request from "../../utils/request"

// 请求数据示例 GET | POST 参数均传对象键值形式 封装的request已处理
// 请求参数务必定义type 尽可能不使用 any
export const demo = (params: { demo: string }) => {
  return request.Get(INTERFACE_URL.demo, params)
}