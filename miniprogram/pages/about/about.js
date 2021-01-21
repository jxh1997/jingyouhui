// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    url: '../../images/zanshangma.jpg'
    // url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdp.gtimg.cn%2Fdiscuzpic%2F0%2Fdiscuz_x5_gamebbs_qq_com_forum_201306_19_1256219xc797y90heepdbh.jpg%2F0&refer=http%3A%2F%2Fdp.gtimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613813628&t=f03f550130b05dd6cc11a12d7cded5e3'
  },
  // 显示弹窗
  showPopup() {
    this.setData({ show: true });
  },

  // 隐藏弹窗
  onClose() {
    this.setData({ show: false });
  },

  previewImage(e){
    var cur=e.target.dataset.src;//获取本地一张图片链接
    console.log(cur);
		wx.previewImage({
			current: cur, // 字符串，默认显示urls的第一张
  		urls: [cur] // 数组，需要预览的图片链接列表
		})
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})