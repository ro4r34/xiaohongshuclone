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
    countView: 0,
    value: ''
  },

  onClickTab(event) {
    console.log('printout tab event', event)
    wx.showToast({
      title: `${event.detail.title}`,
      icon: 'none',
    });
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    const self = this
    // let query = new wx.BaaS.Query()
    let postBaas = new wx.BaaS.TableObject('xhsc_posts')
    let Comments = new wx.BaaS.TableObject('xhsc_comments')
    let query = new wx.BaaS.Query()

    console.log('here')
    console.log(postBaas)

    postBaas.limit(100).find().then(
      (res) => {
        console.log('here print postBass res', res)
        self.setData({
          posts: res.data.objects.reverse()
        }) 
        console.log('lalala', self.data.posts);
        var leftData = [];
        var rightData = [];

        for (let i = 0; i < self.data.posts.length; i++) {
          console.log('post i test', i, self.data.posts[i]);
          if (i%2 == 0) {
            leftData.push(self.data.posts[i]);
          } else {
            rightData.push(self.data.posts[i]);           
          }

        }
        self.setData({
          leftList: leftData,
          rightList: rightData
        })
        console.log(self.data.posts)
        self.data.posts.forEach((post)=>{
          query.compare('post_id', '=', post._id)
          let count = 0
          Comments.setQuery(query).find().then(res => {
            console.log("testtest",res)
          })

          post.commentLen = count
          self.setData({posts: self.data.posts})
        })
      }, 
      (err) => {
        console.log("here we have an err", err)
      }
     
    )




    // self.setData({
    //   leftList: leftData,
    //   rightList: rightData
    // })
    // for (let i = 0; i < self.data.leftList.length; i++) {
    //   console.log()
    // }










  },


  navigateToShowpage: function (e){
    console.log("clickpic", e)
    // let postID = e.currentTarget.dataset.post_id
    // console.log('globalPostID1', app.globalData.globalPostID)
    app.globalData.globalPostID = e.currentTarget.dataset.post_id

    let postview = new wx.BaaS.TableObject('xhsc_posts')
    
    // console.log("postview_count", postview_count)
    let postId = e.currentTarget.dataset.post_id
    postview.get(postId).then(res => {
      console.log('call viewcount', res)
      let count_view = res.data.count_view
      let post = postview.getWithoutData(postId)

      post.set('count_view', count_view +1)
      post.update().then(res => {
        console.log("trying to update view by one", res)
      }, err => {
      })
      // self.setData({
      //   countView: res.data.count_view
      // })
      // console.log('clickpost printout', this.data.clickpost)
    }, err => {
      // err
    })


    // console.log('globalPostID2', app.globalData.globalPostID)
    wx.navigateTo({
      url: '/pages/xhsshow/xhsshow',

    })
  },


  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    wx.showToast({
      title: `${this.data.value}`,
      icon: 'none',
    });
    // Toast('搜索' + this.data.value);
  },
  onClickSearch() {

    wx.showToast({
      title: `SEARCHING ${this.data.value}`,
      icon: 'none',
    });
    // Toast('搜索' + this.data.value);
  },



})


