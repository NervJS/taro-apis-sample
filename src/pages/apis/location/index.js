import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'

export default class Location extends Component {

  config = {
    navigationBarTitleText: '网络相关API展示页'
  }

  state = {
    componentName: '位置',
    btnList: [
      {
        name: '获取地理位置',
        env: ['WEAPP'],
        methods: 'getLocation'
      },
      {
        name: '选择位置',
        env: ['WEAPP'],
        methods: 'chooseLocation'
      },
      {
        name: '查看位置',
        env: ['WEAPP'],
        methods: 'openLocation'
      }
    ],
    currentIndex: 0,
    locationObj: {},
    selectObj: {},
    findObj: {}
  }

  componentWillMount () { }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleLocation (env, type, index) {
    if (env.indexOf(Taro.getEnv()) === -1) {
      Taro.showToast({
        icon: 'none',
        title: `该api暂不支持${Taro.getEnv()}`
      })
      return
    }
    if (type === 'getLocation') {
      Taro[type]({
        type: 'gcj02',
        success:  (res) => {
          console.log(res)
          this.setState({
            locationObj: res,
            currentIndex: index
          })
        }
      })
    } else if (type === 'chooseLocation') {
      Taro[type]({
        type: 'gcj02',
        success: (res) => {
          console.log(res, index)
          this.setState({
            selectObj: res,
            currentIndex: index
          })
        }
      })
    } else {
      Taro.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: (res) => {
          let latitude = res.latitude
          let longitude = res.longitude
          this.setState({
            findObj: res,
            currentIndex: index
          })
          Taro.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
          })
        }
      })
    }
   
  }

  render () {
    const { 
      componentName,
      locationObj,
      btnList,
      currentIndex,
      selectObj,
      findObj
    } = this.state
    return (
      <View className='location'>
        <View className='common_tips'>
          <Text className='common_tip_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='common_header'>
          <Text className='common_title'>{componentName}</Text>
        </View>
        {
          btnList.map((item, index) => {
            return (
              <View key={index} className='oprate_btn' >
                <AtButton
                  className='oprate_btn'
                  hoverClass='btn_hover' 
                  type='primary'
                  onClick={this.handleLocation.bind(this, item.env, item.methods, index)}
                >
                  {item.name}
                </AtButton>
              </View>
            )
          })
        }      
        {
          currentIndex === 0 && locationObj.accuracy &&
          <View>
            <View className='location_content'>
              <View className='location_content_name'>维度:</View>
              <View className='location_content_detail'>{locationObj.latitude}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>经度:</View>
              <View className='location_content_detail'>{locationObj.longitude}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>速度:</View>
              <View className='location_content_detail'>{locationObj.speed}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>位置的精确度:</View>
              <View className='location_content_detail'>{locationObj.accuracy}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>高度:</View>
              <View className='location_content_detail'>{locationObj.altitude}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>垂直精度:</View>
              <View className='location_content_detail'>{locationObj.verticalAccuracy}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>水平精度:</View>
              <View className='location_content_detail'>{locationObj.horizontalAccuracy}</View>
            </View>
          </View>
         
        }
        {
          currentIndex === 1 && selectObj.latitude &&
          <View>
            <View className='location_content'>
              <View className='location_content_name'>位置名称:</View>
              <View className='location_content_detail'>{selectObj.name}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>详细地址:</View>
              <View className='location_content_detail'>{selectObj.address}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>纬度:</View>
              <View className='location_content_detail'>{selectObj.latitude}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>经度:</View>
              <View className='location_content_detail'>{selectObj.longitude}</View>
            </View>
          </View>
        }
        {
          currentIndex === 2 && findObj.altitude &&
          <View>
            <View className='location_content'>
              <View className='location_content_name'>维度:</View>
              <View className='location_content_detail'>{findObj.latitude}</View>
            </View>
            <View className='location_content'>
              <View className='location_content_name'>经度:</View>
              <View className='location_content_detail'>{findObj.longitude}</View>
            </View>
          </View>
        }

      </View>
    )
  }
}

