// pages/profile/profile.js
Page({

  /**
   * Page initial data
   */
  data: {
    currentUser: null,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData ({
      currentUser: getApp().globalData.userInfo 
      })
  },

  userInfoHandler:function (userInfo) {
    const self = this
    wx.BaaS.auth.loginWithWechat(userInfo).then(
      (res) => {
        console.log('res',res)
        self.setData({
            currentUser: res
        })
        wx.setStorageSync('userInfo', res)
        // console.log(this.data.currentUser.id)
      }, (err) => {
        console.log('err',err)
      }
    )
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})