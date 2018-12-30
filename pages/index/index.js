//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    width: app.globalData.windowWidth,
    height: app.globalData.windowHeight,
    motto: 'Hello World',
    
  },
  //事件处理函数
 
  bindJobTap: function(){
    wx.navigateTo({
      url: '../indexJobPage/indexJobPage',
    })
  },

  bindHourseTap: function () {
    wx.navigateTo({
      url: '../indexHoursePage/indexHoursePage',
    })
  },

  bindLoveTap: function () {
    wx.navigateTo({
      url: '../indexlovepage/indexlovepage',
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
})