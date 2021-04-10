// pages/xhsshow/xhsshow.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickpost: [],
    postcomments:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const self = this
    let postfromIndex = new wx.BaaS.TableObject('xhsc_posts')
    let commentfromPost = new wx.BaaS.TableObject('xhsc_comments')

    /** use record ID to find one line of data */
    let postID = app.globalData.globalPostID
    postfromIndex.get(postID).then(res => {
      console.log('post id', res)
      console.log('check post id', postID)

      self.setData({
        clickpost: res.data
      })
      console.log('clickpost printout', this.data.clickpost)
    }, err => {
      // err
    })
    
    let query = new wx.BaaS.Query()
    query.compare('post_id','=',postID)
    commentfromPost.setQuery(query).find().then(
        (res) => {
          console.log("weeee", res)
          self.setData({
            postcomments: res.data.objects
          })
          console.log("yeeeeeet", this.data.postcomments)
        }
    )
    // console.log("yayayaya", this.data.postcomments)
  // let Posts = new wx.BaaS.TableObject('xhsc_posts')
  //   let Likes = new wx.BaaS.TableObject('xhsc_likes')
  //   let query = new wx.BaaS.Query()

  //   let currentId = this.data.currentUser.id
  //   let self = this
  //   console.log(currentId)
  //   query.compare('xhsc_id','=',currentId.toString()) // not sure which id should be queried, waiting for post page to be built
  //   Posts.setQuery(query).find().then(
  //     (res) => {
  //       self.setData({
  //         myPosts: res.data.objects
  //       })
  //       // console.log(this.data.myPosts)
  //     }
  //   )
  // onShow: function () {
  //   // var query = new wx.BaaS.Query()
  //   // var Customer = new wx.BaaS.TableObject('customer')
  //   // var Order = new wx.BaaS.TableObject('order')
  //   // var User = new wx.BaaS.User()
    
  //   // query.compare('customer', '=', Customer.getWithoutData('5bad87ab0769797b4fb27a1b'))
  //   // query.compare('user', '=', User.getWithoutData(69147880))
  //   // Order.setQuery(query).expand(['customer', 'user']).find().then(res => {
    
  //   // })
  //   const self = this
  //   let commentsfromPost = new wx.BaaS.TableObject('xhsc_comments')
    
  }

})