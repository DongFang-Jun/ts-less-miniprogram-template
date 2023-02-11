// index.ts
import { demo } from "../../apis/demo/demo"
Page({
  data: {},

  onLoad() { this.testApi() },

  // 测试接口
  testApi() {
    wx.showLoading({ title: "请求测试接口中" })
    demo({ url: "/operation/test/testLinkByUrl" }).then(({ result }) => {
      console.log(result)
      wx.hideLoading()
    })
  }
})
