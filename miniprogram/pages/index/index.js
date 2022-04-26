const app = getApp()
Page({
  sendreq(){
    wx.requestSubscribeMessage({
      tmplIds: ['替换成自己的模板ID'],
      success (res) {
        console.log(res)
        // 可以res里找到模板ID值，判断用户是否同意，并作出相关动作
      }
    })
  }
})
