// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date: {
      type: String,
      observer(newVal) {
        let val = newVal.toString().split("-")
        let valObj = { ...val };
        this.setData({
          year: valObj[0],
          // month: parseInt(valObj[1]),
          month: this.data.months[parseInt(valObj[1]) - 1],
          day: valObj[2],
        })
        console.log(this.data);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    year: 1,
    month: 1,
    day: 1
  },

  // ready() {
  //   this.setData({
  //     month_str: this.data.months[this.data.month - 1]
  //   })
  // },

  /**
   * 组件的方法列表
   */ 
  methods: {
    
  }
})
