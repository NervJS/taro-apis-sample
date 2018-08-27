import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class System extends Component {
  state = {
    networkType: ''
  }

  config = {
    navigationBarTitleText: '设备'
  }

  componentWillMount () {
    Taro.getNetworkType()
      .then(res => {
        if (res && res.networkType) {
          console.log(res.networkType)
          this.setState({ type: res.networkType })
        }
      })
    Taro.onNetworkStatusChange(res => {
      if (typeof res === 'object') this.setState({ type: res.type })
    })
  }

  async getNetworkType () {
    const res = await Taro.getNetworkType()
    if (res && res.networkType) this.setState({ networkType: res.networkType })
  }

  clearNetworkType () {
    this.setState({ networkType: '' })
  }

  async getSystemInfo () {
    const res = await Taro.getSystemInfo()
    if (typeof res === 'object') this.setState({ systemInfo: res })
  }

  render () {
    const { systemInfo, type } = this.state
    console.log('state', this.state)

    return (
      <View className='system'>
        <View className='common_header'>
          <Text className='common_title'>getNetworkType</Text>
        </View>
        <View>网络状态</View>
        <View>{this.state.networkType || ''}</View>
        <Button onClick={this.getNetworkType}>获取手机网络状态</Button>
        <Button onClick={this.clearNetworkType}>清空</Button>

        <View className='common_header'>
          <Text className='common_title'>onNetworkStatusChagne</Text>
        </View>
        <View>网络状态</View>
        <View>{type || ''}</View>

        <View className='common_header'>
          <Text className='common_title'>getSystemInfo</Text>
        </View>
        {systemInfo.brand && <View>手机品牌：{systemInfo.brand}</View>}
        {systemInfo.model && <View>手机型号：{systemInfo.model}</View>}
        {systemInfo.pixelRatio && <View>设备像素比：{systemInfo.pixelRatio}</View>}
        {systemInfo.screenWidth && <View>屏幕宽度：{systemInfo.screenWidth}</View>}
        {systemInfo.screenHeight && <View>屏幕高度：{systemInfo.screenHeight}</View>}
        {systemInfo.windowWidth && <View>可使用窗口宽度：{systemInfo.windowWidth}</View>}
        {systemInfo.windowHeight && <View>可使用窗口高度：{systemInfo.windowHeight}</View>}
        {systemInfo.statusBarHeight && <View>状态栏的高度：{systemInfo.statusBarHeight}</View>}
        {systemInfo.language && <View>微信设置的语言：{systemInfo.language}</View>}
        {systemInfo.version && <View>微信版本号：{systemInfo.version}</View>}
        {systemInfo.system && <View>操作系统版本：{systemInfo.system}</View>}
        {systemInfo.platform && <View>客户端平台：{systemInfo.platform}</View>}
        {systemInfo.fontSizeSetting && <View>用户字体大小设置：{systemInfo.fontSizeSetting}</View>}
        {systemInfo.SDKVersion && <View>客户端基础库版本：{systemInfo.SDKVersion}</View>}
        <Button onClick={this.getSystemInfo}>获取手机系统信息</Button>
      </View>
    )
  }
}
