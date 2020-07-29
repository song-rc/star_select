// pages/star_main/star_main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    sta:[
      {
        image:"/image/by.jpg",
        title:"白羊座",
        star:"baiyang",
        date:"3.21-4.19"
      },
      {
        image: "/image/jn.jpg",
        star:"jinniu",
        title: "金牛座",
        date: "4.20-5.20"
      },
      {
        image: "/image/shzi.jpg",
        star:"shuangzi",
        title: "双子座",
        date: "5.21-6.21"
      },
      {
        image: "/image/jx.jpg",
        star:"juxie",
        title: "巨蟹座",
        date: "6.22-7.22"
      },
      {
        image: "/image/sz.jpg",
        star:"shizi",
        title: "狮子座",
        date: "7.23-8.22"
      },
      {
        image: "/image/cv.jpg",
        star:"chunv",
        title: "处女座",
        date:"8.23-9.22"
      },
      {
        image: "/image/tp.jpg",
        star:"tiancheng",
        title: "天秤座",
        date: "9.23-10.23"
      },
      {
        image: "/image/tx.jpg",
        star:"tianxie",
        title: "天蝎座",
        date: "10.24-11.22"
      },
      {
        image: "/image/ss.jpg",
        star:"sheshou",
        title: "射手座",
        date: "11.23-12.21"
      },
      {
        image: "/image/mj.jpg",
        star:"mojie",
        title: "摩羯座",
        date: "12.22-1.19"
      },
      {
        image: "/image/sp.jpg",
        star:"shuiping",
        title: "水瓶座",
        date: "1.20-2.18"
      },
      {
        image: "/image/sy.jpg",
        star:"shuangyu",
        title: "双鱼座",
        date: "2.19-3.20"
      }
    ]
  },
  bindstartap(e){
    var that=this
    // console.log(e.currentTarget.dataset.idx)
    that.setData({ index: e.currentTarget.dataset.idx})
    for(var i=0;i<that.data.sta.length;i++){
      if (i == e.currentTarget.dataset.idx){
        // console.log(that.data.star[i])
        wx.navigateTo({
          url: '../star/star',
        })
        wx.setStorage({
          key: 'xz',
          data: that.data.sta[i],
        })
      }
    }
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