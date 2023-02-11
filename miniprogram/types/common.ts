// 全局通用 type 定义

interface requestHeaderDataType {
  "Content-Type"?: string
}

export interface requestDataType {
  code?: number,
  result?: any,
  msg?: string,
  success?: boolean
  size?: number,
  total?: number
}


export interface requestType {
  errMsg?: string,
  header: requestHeaderDataType,
  data: requestDataType
}