import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Header from '../../../../components/header'
import './index.scss'

export default class SystemInfo extends Component {
  state = {
    systemInfo: {}
  }

  config = {
    navigationBarTitleText: '系统信息'
  }

  async getSystemInfo () {
    const res = await Taro.getSystemInfo()
    if (res && typeof res === 'object') {
      const unsupport = '当前平台不支持获取此值'
      this.setState({
        systemInfo: {
          brand: res.brand || unsupport,
          model: res.model || unsupport,
          pixelRatio: res.pixelRatio || unsupport,
          screenWidth: res.screenWidth || unsupport,
          screenHeight: res.screenHeight || unsupport,
          windowWidth: res.windowWidth || unsupport,
          windowHeight: res.windowHeight || unsupport,
          statusBarHeight: res.statusBarHeight || unsupport,
          language: res.language || unsupport,
          version: res.version || unsupport,
          system: res.system || unsupport,
          platform: res.platform || unsupport,
          fontSizeSetting: res.fontSizeSetting || unsupport,
          SDKVersion: res.SDKVersion || unsupport
        }
      })
    }
  }

  render () {
    const { systemInfo } = this.state

    return (
      <View className='system'>
        <Header title='getSystemInfo' />
        <View className='system__list'>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>手机品牌：</View>
            <View className='system__list-item-content at-col'>{systemInfo.brand || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>手机型号：</View>
            <View className='system__list-item-content at-col'>{systemInfo.model || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>设备像素比：</View>
            <View className='system__list-item-content at-col'>{systemInfo.pixelRatio || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>屏幕宽度：</View>
            <View className='system__list-item-content at-col'>{systemInfo.screenWidth || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>屏幕高度：</View>
            <View className='system__list-item-content at-col'>{systemInfo.screenHeight || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>可使用窗口宽度：</View>
            <View className='system__list-item-content at-col'>{systemInfo.windowWidth || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>可使用窗口高度：</View>
            <View className='system__list-item-content at-col'>{systemInfo.windowHeight || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>状态栏的高度：</View>
            <View className='system__list-item-content at-col'>{systemInfo.statusBarHeight || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>微信设置的语言：</View>
            <View className='system__list-item-content at-col'>{systemInfo.language || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>微信版本号：</View>
            <View className='system__list-item-content at-col'>{systemInfo.version || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>操作系统版本：</View>
            <View className='system__list-item-content at-col'>{systemInfo.system || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>客户端平台：</View>
            <View className='system__list-item-content at-col'>{systemInfo.platform || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>用户字体大小设置：</View>
            <View className='system__list-item-content at-col'>{systemInfo.fontSizeSetting || '未获取'}</View>
          </View>
          <View className='system__list-item at-row'>
            <View className='system__list-item-title at-col'>客户端基础库版本：</View>
            <View className='system__list-item-content at-col'>{systemInfo.SDKVersion || '未获取'}</View>
          </View>
        </View>
        <View className='system__btn'>
          <AtButton type='primary' onClick={this.getSystemInfo.bind(this)}>获取手机系统信息</AtButton>
        </View>
      </View>
    )
  }
}
