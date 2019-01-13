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
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "#red", url: 'http://www.logo123.net/logos/2018/02/08/201802081609588853.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "green", url: 'http://www.logo123.net/logos/2018/01/29/2018012911482135354984.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "red", url: 'http://www.logo123.net/logos/2018/01/12/2018011216091035399763.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "gold", url: 'http://www.logo123.net/logos/2017/11/23/2017112320332935399763.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "orange", url: 'http://www.logo123.net/logos/2017/11/02/201711022128034372.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "red", url: 'http://www.logo123.net/logos/2017/09/30/2017093010292635399763.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "#EEE618", url: 'http://www.logo123.net/logos/2017/09/28/20170928103622298.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "red", url: 'http://www.logo123.net/logos/2017/07/03/201707031845593518.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "yellow", url: 'http://www.logo123.net/logos/2017/06/18/2017061813312335404609.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "green", url: 'http://www.logo123.net/logos/2017/05/22/20170522145124879.png', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "#B0E2FF", url: 'http://www.logo123.net/logos/2017/05/07/2017050719451735399763.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "gold", url: 'http://www.logo123.net/logos/2017/04/15/2017041523580935404617.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "#BCEE610", url: 'http://www.logo123.net/logos/2016/04/24/201604241315194715.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "yellow", url: 'http://www.logo123.net/logos/2014/12/21/201412211757008227.jpg', margin: Math.floor(Math.random() * 10)},
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "orange", url: 'http://www.logo123.net/logos/2018/06/30/2018063012212135355534.jpg', margin: Math.floor(Math.random() * 10) },
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 13) + app.globalData.windowHeight / 13, color: "red", url: 'http://www.logo123.net/logos/2018/05/18/2018051810480235405778.png', margin: Math.floor(Math.random() * 10) },
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "#EEE61010", url: 'http://www.logo123.net/logos/2018/06/06/2018060614305135404617.jpg', margin: Math.floor(Math.random() * 10) },
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowWidth / 13, color: "red", url: 'http://www.logo123.net/logos/2017/08/09/2017080921592310100.png', margin: Math.floor(Math.random() * 10) },
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13, color: "#EEE61010", url: 'http://www.logo123.net/logos/2018/06/06/2018060614305135404617.jpg', margin: Math.floor(Math.random() * 10) },
      { width: Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowWidth / 13, color: "red", url: 'http://www.logo123.net/logos/2017/08/09/2017080921592310100.png', margin: Math.floor(Math.random() * 10) },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 获得输入框公司名称
   */
  companyName:function(e){
    console.log(e.detail.value);
    wx.navigateTo({
      url: '',
    })
  },

  /**
   * 点击公司logo获取详细信息
   */

  tapCompanyLogo:function(){
    console.log('点击了公司logo');
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

  prvPage:function(){
    var tempArr = this.data.arr;
    for(let i=0;i<tempArr.length;i++){
      tempArr[i].width = Math.floor(Math.random() * app.globalData.windowHeight / 12) + app.globalData.windowHeight / 13;
      tempArr[i].margin = Math.floor(Math.random() * 10);
    }
    this.setData({
      arr:tempArr
    })
  },

  nextPage:function(){
    console.log(111);
    this.prvPage();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})