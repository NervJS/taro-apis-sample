import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Index from './pages/index'
import '@tarojs/async-await'
import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/apis/network/network',
      'pages/apis/storage/index',
      'pages/apis/location/index',
      'pages/apis/interface/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

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
