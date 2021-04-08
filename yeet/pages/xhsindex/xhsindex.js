// pages/xhsindex/xhsindex.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts:[],
    leftList: [],
    rightList: [],
    leftHight: 0,
    rightHight: 0
  },

  onClickTab(event) {
    console.log('printout tab event', event)
    wx.showToast({
      title: `Hello ${event.detail.title}`,
      icon: 'none',
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    // let query = new wx.BaaS.Query()
    let postBaas = new wx.BaaS.TableObject('xhsc_posts')
    console.log('here')
    console.log(postBaas)

    postBaas.find().then(
      (res) => {
        console.log('here print postBass res', res)
        self.setData({
          posts: res.data.objects
        }) 
        console.log('lalala', self.data.posts);
      }, 
      (err) => {
        console.log("here we have an err", err)
      }
    )
    console.log('bababa', self.data.posts);

    // var leftH = self.data.leftHight;
    // var rightH = self.data.rightHight;
    // var leftData = [];
    // var rightData = [];

    for (let i = 0; i < self.data.posts.length; i++) {
      console.log('post i test', i, self.data.posts[i]);
      // var currentItemHeight = parseInt(Math.round(posts[i].CoverHeight * 345 / allData[i].CoverWidth));
      // allData[i].CoverHeight = currentItemHeight + "rpx";//因为xml文件中直接引用的该值作为高度，所以添加对应单位
      // if (leftH == rightH || leftH < rightH) {//判断左右两侧当前的累计高度，来确定item应该放置在左边还是右边
      //   leftData.push(allData[i]);
      //   leftH += currentItemHeight;
      // } else {
      //   rightData.push(allData[i]);
      //   rightH += currentItemHeight;
      // }
    }


  },

  navigateToShowpage: function (e){
    console.log("clickpic", e)
    // let postID = e.currentTarget.dataset.post_id
    // console.log('globalPostID1', app.globalData.globalPostID)
    app.globalData.globalPostID = e.currentTarget.dataset.post_id
    // console.log('globalPostID2', app.globalData.globalPostID)
    wx.navigateTo({
      url: '/pages/xhsshow/xhsshow',

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