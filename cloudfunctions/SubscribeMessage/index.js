const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        touser: cloud.getWXContext().OPENID,
        page: 'pages/index/index',
        lang: 'zh_CN',
        data: {
          thing2: {
            value: '中午吃什么？点个外卖吧！'
          },
          thing3: {
            value: '红包天天领，能叠加使用，叫外卖更省钱~'
          },
          thing5: {
            value: '记得好好吃饭！'
          }
        },
        templateId: 'Sw2wVb1Im3kAaIBqJEQ4XAWf-ABR4pmsgTTlkZyvit8',
        miniprogramState: 'developer' // developer为开发版；trial为体验版；formal为正式版；默认为正式版
      })
    return result
  } catch (err) {
    return err
  }
}