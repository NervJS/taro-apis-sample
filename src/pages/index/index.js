import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'
import menusData from './menu'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onGotoNetwork = (url) => {
    Taro.navigateTo({
      url
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='index_top'>
          <Text className='index_top_text'>{menusData.desc}</Text>
        </View>
        <View className='index_main'>
          {
            menusData.list.map((item, index) => {
              return (
                <View className='index_main_sub' onClick={this.onGotoNetwork.bind(this, item.url)} key={index}>
                  <Text>{item.name}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

