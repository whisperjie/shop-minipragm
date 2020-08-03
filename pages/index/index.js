// pages/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    message: "hello world",
    array: [1, 2, 3, 4, 5, 6],
    flag: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    aa: function () {
      wx.requestPayment(
        {
          'timeStamp': '',
          'nonceStr': '',
          'package': '',
          'signType': 'MD5',
          'paySign': '',
          'success': function (res) {
            console.log("successed")
          },
          'fail': function (res) {
            console.log("failes")
          },
          'complete': function (res) { }
        })
    }
  }

})
