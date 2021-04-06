// pages/xhsshow/xhsshow.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickpost: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const self = this
    let postfromIndex = new wx.BaaS.TableObject('xhsc_posts')

    /** use record ID to find one line of data */
    let postID = app.globalData.globalPostID
    postfromIndex.get(postID).then(res => {
      console.log('post id', res)
      self.setData({
        clickpost: res.data
      })
      console.log('clickpost printout', clickpost)
    }, err => {
      // err
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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