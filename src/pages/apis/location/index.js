import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Input, Canvas } from '@tarojs/components'

import './index.scss'

export default class Location extends Component {

  config = {
    navigationBarTitleText: '网络相关API展示页'
  }

  state = {
    componentName: '位置',
  
  }

  componentWillMount () { }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleLocation (type) {
    if (Taro.getEnv() === 'WEB') {
      Taro.showToast({
        icon: 'none',
        title: 'h5端暂时不支持'
      }) 
      return
    }
    Taro[type]({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        Taro.showToast({
          icon: 'none',
          title: res
        }) 
      }
    })
  }

  render () {
    const { 
      componentName
    } = this.state
    return (
      <View className='location'>
        <View className='common_tips'>
          <Text className='common_tip_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='common_header'>
          <Text className='common_title'>{componentName}</Text>
        </View>
        <Button
          className='oprate_btn'
          hoverClass='btn_hover' 
          onClick={this.handleLocation.bind(this, 'getLocation')}>
          获取地理位置
        </Button>
        <Button
          className='oprate_btn'
          hoverClass='btn_hover' 
          onClick={this.handleLocation.bind(this, 'chooseLocation')}>
          选择位置
        </Button>
        <Button
          className='oprate_btn'
          hoverClass='btn_hover' 
          onClick={this.handleLocation.bind(this, 'openLocation')}>
          查看位置
        </Button>
      </View>
    )
  }
}

