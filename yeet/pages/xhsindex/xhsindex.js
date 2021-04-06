// pages/xhsindex/xhsindex.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    let postBaas = new wx.BaaS.TableObject('xhsc_posts')
    console.log('here')
    console.log(postBaas)

    postBaas.find().then(
      (res) => {
        console.log('here print postBass res', res)
        self.setData({
          posts: res.data.objects
        }), (err) => {
          console.log("here we have an err", err)
        }
      }
    )


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