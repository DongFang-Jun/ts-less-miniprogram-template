// 获取本地存储
export const getLocalStorage = (key: string): string | any => {
  try {
    const info = wx.getStorageSync(key)
    if (info) {
      return JSON.parse(info)
    } else {
      return ''
    }
  } catch (error) {
    return ''
  }
}
