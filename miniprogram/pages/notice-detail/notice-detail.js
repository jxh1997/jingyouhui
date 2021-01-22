Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice: [],
    cid: '',
    latest: true,
    first: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cid = options.cid;
    let that = this;
    let notice = '';
    wx.getStorage({
      key: 'notice',
      success (res) {
        notice = res.data
        notice.forEach((item) => {
          if(item.id == cid) {
            that.setData({
              notice: item
            })
          }
        })
      }
    })
  },
})