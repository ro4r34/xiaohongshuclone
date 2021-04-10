// pages/profile/profile.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    currentUser: null,
    myPosts: [],
    myLikes: [],
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
      }, (err) => {
        console.log('err',err)
      }
    )
  },

  

  onShow: function () {
    let Posts = new wx.BaaS.TableObject('xhsc_posts')
    let Likes = new wx.BaaS.TableObject('xhsc_likes')
    let query = new wx.BaaS.Query()

    let currentId = this.data.currentUser.id
    let self = this
    console.log(currentId)
    query.compare('xhsc_id','=',currentId.toString()) // not sure which id should be queried, waiting for post page to be built
    Posts.setQuery(query).find().then(
      (res) => {
        self.setData({
          myPosts: res.data.objects
        })
        // console.log(this.data.myPosts)
      }
    )
    Likes.setQuery(query).expand(["post_id"]).find().then(
      (res) => {
        console.log('testing!!!', res)
        self.setData({
          myLikes: res.data.objects
        })
        console.log(this.data.myLikes)
      }, (err) => {
        console.log('err', err)
      }
    )
  },
  navigateToPostPage: function () {
    wx.navigateTo({
      url: '/pages/post/post',
    })
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
  }

})
