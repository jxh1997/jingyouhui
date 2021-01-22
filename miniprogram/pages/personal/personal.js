// miniprogram/pages/personal/personal.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classics: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 公告内容
    db.collection('notice').get().then(res => {
      const notice = res.data;
      let classics = [];
      console.log(notice);
      notice.forEach((item) => {
        if(!item.IndexShow) {
          classics.push(item.notice)
        }
        wx.setStorage({
          key:"notice",
          data: classics
        })
        this.setData({ classics })
      })
    })
  },
  // 跳转联系我们
  onJumpToAbout(event) {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  // 跳转公告详情页
  onJumpToDetail(event) {
    const cid = event.detail.cid
    const type = event.detail.type
    // wx.navigateTo
    wx.navigateTo({
      url: `/pages/notice-detail/notice-detail?cid=${cid}&type=${type}`
    })
  }
})