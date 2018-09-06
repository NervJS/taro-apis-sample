const menusData = {
  name: 'Taro API',
  desc: '这里展示的是 Taro 官方端能力，将演示基本 API 的调用方式及效果。',
  list: [{
      name: '网络',
      url: '/pages/apis/network/index'
    }, {
      name: '媒体',
      url: '/pages/apis/media/index'
    }, {
      name: '数据缓存',
      url: '/pages/apis/storage/index'
    }, {
      name: '位置',
      url: '/pages/apis/location/index'
    }, {
      name: '设备',
      subList: [{
        name: '系统信息',
        url: '/pages/apis/system/systemInfo/index'
      }, {
        name: '网络状态',
        url: '/pages/apis/system/networkType/index'
      }]
    }, {
      name: '界面',
      url: '/pages/apis/interface/index'
  }]
}
export default menusData
