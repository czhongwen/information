// pages/indexJobPage/indexJobPage.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: app.globalData.windowWidth,
    height: app.globalData.windowHeight,
    arr:[
      { width: Math.floor(Math.random() * app.globalData.windowHeight/13) + app.globalData.windowHeight/13, color: "#FFE4B10", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "green", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "red", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "gold", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "orange", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "red", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "#EEE618", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "red", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "yellow", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "green", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "#B0E2FF", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "gold", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "#BCEE610", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "yellow", url: 'url', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "orange", url: 'url', margin: Math.floor(Math.random() * 10) },
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "red", url: 'url', margin: Math.floor(Math.random() * 10) },
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "#EEE61010", url: 'url', margin: Math.floor(Math.random() * 10) },
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowWidth / 13, color: "red", url: 'url', margin: Math.floor(Math.random() * 10) },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  onShowCanvas:function(){
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})