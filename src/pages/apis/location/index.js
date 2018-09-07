import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'

import './index.scss'

export default class Location extends Component {

  config = {
    navigationBarTitleText: '位置'
  }

  state = {
    componentName: '位置',
    resultText: ''
  }

  async handleLocation (type) {
    if (Taro.getEnv() === 'WEB') {
      Taro.showToast({
        icon: 'none',
        title: 'h5端暂时不支持'
      }) 
      return
    }
    let res
    if (type !== 'openLocation') {
      res = await Taro[type]({
        type: 'gcj02'
      })
    } else {
      res = await Taro[type]({
        type: 'gcj02',
        latitude: 22.55375,
        longitude: 113.88732
      })
    }
    
    const resultText = JSON.stringify(res, 2)
    this.setState({
      resultText
    })
  }

  render () {
    const { 
      componentName,
      resultText
    } = this.state
    return (
      <View className='location'>
        <View className='common_tips'>
          <Text className='common_tip_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='common_header'>
          <Text className='common_title'>{componentName}</Text>
        </View>
        <View className='location_main'>
          <View className='location_result'>
            <AtCard title='API效果展示'>
              <View style='word-wrap: break-word'>
                {resultText}
              </View>
            </AtCard>
          </View>
          <View className='location_wp'>
            <View className='location_wp_btn' onClick={this.handleLocation.bind(this, 'getLocation')}>
              <AtButton type='primary'>获取地理位置</AtButton>
            </View>
            <View className='location_wp_btn' onClick={this.handleLocation.bind(this, 'chooseLocation')}>
              <AtButton type='primary'>选择位置</AtButton>
            </View>
            <View className='location_wp_btn' onClick={this.handleLocation.bind(this, 'openLocation')}>
              <AtButton type='primary'>查看位置</AtButton>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

