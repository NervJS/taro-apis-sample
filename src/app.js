import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'

import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/apis/network/index',
      'pages/apis/storage/index',
      'pages/apis/location/index',
      'pages/apis/interface/index',
      'pages/apis/media/index',
      'pages/apis/system/systemInfo/index',
      'pages/apis/system/networkType/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#173fff',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/apis/interface/index',
          iconPath: 'asset/zt@2x.png',
          selectedIconPath: 'asset/zt_active@2x.png',
          text: '网络api'
        },
        {
          pagePath:  'pages/apis/interface/index',
          iconPath: 'asset/mine@2x.png',
          selectedIconPath: 'asset/mine_active@2x.png',
          text: '测试'
        }
      ]
    }
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      require('taro-ui/dist/weapp/css/index.css')
    } else if (process.env.TARO_ENV === 'h5') {
      require('taro-ui/dist/h5/css/index.css')
    }
    // Taro.hideTabBar()
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
