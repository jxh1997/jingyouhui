// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    ds_url: '../../images/zanshangma.jpg',
    lx_url: '',
  },
  // 显示弹窗
  showPopup() {
    this.setData({ show: true });
  },

  // 隐藏弹窗
  onClose() {
    this.setData({ show: false });
  },

  // 打赏码预览
  onPreviewDS() {
    wx.previewImage({
      urls: [this.data.ds_url],
    })
  },
  // 二维码预览
  onPreviewLX() {
    wx.previewImage({
      urls: [this.data.lx_url],
    })
  },
  // previewImage(e){
  //   var cur=e.target.dataset.src;//获取本地一张图片链接
  //   console.log(cur);
	// 	wx.previewImage({
	// 		current: cur, // 字符串，默认显示urls的第一张
  // 		urls: [cur] // 数组，需要预览的图片链接列表
	// 	})
  // },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})