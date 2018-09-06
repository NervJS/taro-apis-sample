import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
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
    }
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      require('taro-ui/dist/weapp/css/index.css')
    } else if (process.env.TARO_ENV === 'h5') {
      require('taro-ui/dist/h5/css/index.css')
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <View>
        <Index />
      </View>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
