// pages/star/star.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    hidden:true,
    sta: [
      {
        image: "/image/by.jpg",
        title: "白羊座",
        star: "baiyang",
        date: "3.21-4.19"
      },
      {
        image: "/image/jn.jpg",
        star: "jinniu",
        title: "金牛座",
        date: "4.20-5.20"
      },
      {
        image: "/image/shzi.jpg",
        star: "shuangzi",
        title: "双子座",
        date: "5.21-6.21"
      },
      {
        image: "/image/jx.jpg",
        star: "juxie",
        title: "巨蟹座",
        date: "6.22-7.22"
      },
      {
        image: "/image/sz.jpg",
        star: "shizi",
        title: "狮子座",
        date: "7.23-8.22"
      },
      {
        image: "/image/cv.jpg",
        star: "chunv",
        title: "处女座",
        date: "8.23-9.22"
      },
      {
        image: "/image/tp.jpg",
        star: "tiancheng",
        title: "天秤座",
        date: "9.23-10.23"
      },
      {
        image: "/image/tx.jpg",
        star: "tianxie",
        title: "天蝎座",
        date: "10.24-11.22"
      },
      {
        image: "/image/ss.jpg",
        star: "sheshou",
        title: "射手座",
        date: "11.23-12.21"
      },
      {
        image: "/image/mj.jpg",
        star: "mojie",
        title: "摩羯座",
        date: "12.22-1.19"
      },
      {
        image: "/image/sp.jpg",
        star: "shuiping",
        title: "水瓶座",
        date: "1.20-2.18"
      },
      {
        image: "/image/sy.jpg",
        star: "shuangyu",
        title: "双鱼座",
        date: "2.19-3.20"
      }
    ],
    xz:null,
    ys:null,
    xx:[
      {
        image:"/image/xx.png"
      },
      {
        image: "/image/xx.png"
      },
      {
        image: "/image/xx.png"
      },
      {
        image: "/image/xx.png"
      },
      {
        image: "/image/xx.png"
      }
    ],
    xx1:[
      {
        image:"/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      }
    ],
    love: [
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      }
    ],
    money: [
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      }
    ],
    work: [
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      },
      {
        image: "/image/xx1.png"
      }
    ]
  },
  click(e){
    // console.log(e.currentTarget.dataset.idx)
    var that = this
    that.setData({ index: e.currentTarget.dataset.idx })
    for (var i = 0; i < that.data.sta.length; i++) {
      if (i == e.currentTarget.dataset.idx) {
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
  qh(e){
    this.setData({hidden:false})
  },
  gb(e) {
    this.setData({ hidden: true })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'xz',
      success: function(res) {
        // console.log(res)
        that.setData({xz:res.data})
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this
    wx.request({
      url: 'https://ali-star-lucky.showapi.com/star', //【1】仅为示例，并非真实的接口地址
      method: "GET",
      header: {
        "Authorization": "APPCODE 079817fe544f467f90f0234a00e185c2"  //【3】传入自己的appcode，在买家中心查看。注意appcode与值之间有一个必须的空格 58ac025da**********3341f029ce  改为自己的APPCODE
      },
      data: {
        star: that.data.xz.star,
        needTomorrow: "1",
        needMonth: "1",
        needWeek: "1",
        needYear: "1"
      },
      success: function (res) {
        console.log(res.data.showapi_res_body)
        that.setData({ ys: res.data.showapi_res_body})
        that.data.xx1.splice("0", that.data.ys.day.summary_star),
        that.data.love.splice("0", that.data.ys.day.love_star),
        that.data.money.splice("0", that.data.ys.day.money_star),
        that.data.work.splice("0", that.data.ys.day.work_star)
        that.setData({ 
          xx1:that.data.xx1,
          love:that.data.love,
          money:that.data.money,
          work:that.data.work
         })
      }
    })
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