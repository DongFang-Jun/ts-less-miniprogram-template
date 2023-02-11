import { INTERFACE_URL } from "../../config/interface"
import { requestDataType } from "../../types/common"
import request from "../../utils/request"

// 请求数据示例 GET | POST 参数均传对象键值形式 封装的request已处理
// 请求参数务必定义type 尽可能不使用 any
export const demo = (params: { url: string }): Promise<requestDataType> => {
  return request.Get(INTERFACE_URL.demo, params)
}