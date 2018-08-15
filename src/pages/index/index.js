import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onGotoNetwork = () => {
    Taro.navigateTo({
      url: '../apis/network/network'
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='index_top'>
          <Text className='index_top_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='index_main'>
          <View className='index_main_sub' onClick={this.onGotoNetwork}>
            <Text>网络</Text>
          </View>
        </View>
      </View>
    )
  }
}

