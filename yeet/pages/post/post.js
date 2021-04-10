// pages/post/post.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: [],
    description: [],
    imageURL: "",
    currentUser: getApp().globalData.userInfo 

  },
  uploadImage: function(){
    const self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePaths = res.tempFilePaths
        console.log("photoupload", tempFilePaths)
        console.log(res)
          self.setData({
            imageURL: tempFilePaths
          })
        console.log(self.data.imageURL)
      }
    })
  },
  bindTitleInput: function(e){
    console.log("Title", e)
    this.setData({
      title: e.detail.value
    })
  },
  bindDescription: function(e){
    console.log("Desciption", e)
    this.setData({
      description: e.detail.value
    })
  },

  formSubmit:function(e){
    const self = this

    let MyFile = new wx.BaaS.File()
    let fileParams = {filePath: this.data.imageURL[0]}
    let metaData = {categoryName: 'SDK'}

    MyFile.upload(fileParams, metaData).then(res => {
      let pictureURL = res.data.path
      console.log(e)
    let Posts = new wx.BaaS.TableObject('xhsc_posts')
    let newPost = Posts.create()
    newPost.set({
      title: this.data.title,
      description: this.data.description,
      pictureURL: pictureURL,
      xhsc_id: this.data.currentUser.id
      
    })

    newPost.save().then(
      (res)=>{
        console.log("new post added", res)
        wx.switchTab({
          url: '/pages/xhsindex/xhsindex',
        })
      }
    )
    })
    
  },
  onLoad: function (options) {

  },

})