import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'

export default class Network extends Component {
  config = {
    navigationBarTitleText: '媒体'
  }

  state = {
    meun: [{
      id: 1,
      isShowMore: false,
      name: '图片',
      apiList: [{
        name: 'Taro.chooseImage',
        method: 'chooseImage'
      }, {
        name: 'Taro.previewImage',
        method: 'previewImage'
      }, {
        name: 'Taro.getImageInfo',
        method: 'getImageInfo'
      }, {
        name: 'Taro.saveImageToPhotosAlbum',
        method: 'saveImageToPhotosAlbum'
      }]
    }, {
      id: 2,
      isShowMore: false,
      name: '录音',
      apiList: [{
        name: 'Taro.startRecord',
        method: 'startRecord'
      }, {
          name: 'Taro.stopRecord',
          method: 'stopRecord'
      }]
    }, {
      id: 3,
      isShowMore: false,
      name: '录音管理',
      apiList: [{
        name: 'Taro.getRecorderManager',
        method: 'getRecorderManager'
      }]
    }, {
      id: 4,
      isShowMore: false,
      name: '音频播放控制',
      apiList: [{
        name: 'Taro.playVoice',
        method: 'playVoice'
      }, {
        name: 'Taro.pauseVoice',
        method: 'pauseVoice'
      }, {
        name: 'Taro.stopVoice',
        method: 'stopVoice'
      }]
    }, {
      id: 5,
      isShowMore: false,
      name: '音乐播放控制',
      apiList: [{
        name: 'Taro.getBackgroundAudioPlayerState',
        method: 'getBackgroundAudioPlayerState'
      }, {
          name: 'Taro.playBackgroundAudio',
          method: 'playBackgroundAudio'
      }, {
        name: 'Taro.pauseBackgroundAudio',
        method: 'pauseBackgroundAudio'
      }, {
        name: 'Taro.seekBackgroundAudio',
        method: 'seekBackgroundAudio'
      }, {
        name: 'Taro.stopBackgroundAudio',
        method: 'stopBackgroundAudio'
      }, {
        name: 'Taro.onBackgroundAudioPlay',
        method: 'onBackgroundAudioPlay'
      }, {
        name: 'Taro.onBackgroundAudioPause',
        method: 'onBackgroundAudioPause'
      }, {
        name: 'Taro.onBackgroundAudioStop',
        method: 'onBackgroundAudioStop'
      }]
    }, {
      id: 6,
      isShowMore: false,
      name: '背景音频播放管理',
      apiList: [{
        name: 'Taro.getBackgroundAudioManager',
        method: 'getBackgroundAudioManager'
      }]
    }, {
      id: 7,
      isShowMore: false,
      name: '音频组件控制',
      apiList: [{
        name: 'Taro.createAudioContext',
        method: 'createAudioContext'
      }, {
        name: 'Taro.createInnerAudioContext',
        method: 'createInnerAudioContext'
      }]
    }, {
      id: 8,
      isShowMore: false,
      name: '视频',
      apiList: [{
        name: 'Taro.chooseVideo',
        method: 'chooseVideo'
      }, {
        name: 'Taro.saveVideoToPhotosAlbum',
        method: 'saveVideoToPhotosAlbum'
      }]
    }, {
      id: 9,
      isShowMore: false,
      name: '视频组件控制',
      apiList: [{
        name: 'Taro.createVideoContext',
        method: 'createVideoContext'
      }]
    }, {
      id: 10,
      isShowMore: false,
      name: '相机组件控制',
      apiList: [{
        name: 'Taro.createCameraContext',
        method: 'createCameraContext'
      }]
    }],
    showDesc: '',
    isShowResult: false
  }

  onHandleTitleClick = (meunItem) => {
    const { meun } = this.state
    const newMeun = meun.map(item => {
      if (item.id === meunItem.id) {
        item.isShowMore = !item.isShowMore
      }
      return item
    })
    this.setState({
      meun: newMeun
    })
  }

  onHandleApiClick = (api) => {
    this.setState({
      isShowResult: true
    })
    const env = Taro.getEnv()
    let showDesc
    showDesc = env === 'WEAPP' ? `${env}环境下支持 Taro.${api.method} API` : `${env}环境下不支持 Taro.${api.method} API`
    this.setState({ showDesc })
  }

  render() {
    const { meun, showDesc, isShowResult } = this.state

    return (
      <View className='index'>
        <View className='common_tips'>
          <Text className='common_tip_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='common_header'>
          <Text className='common_title'>媒体</Text>
        </View>
        {isShowResult && <View>
          <AtCard title='API效果展示'>
          {showDesc}
        </AtCard>
        </View>}
        <View className='index_main'>
          {meun.map((item, idx) => {
            return <View className={item.isShowMore ? 'common_menu active' : 'common_menu'} key={idx}>
              <View className='common_menu_title' onClick={this.onHandleTitleClick.bind(null, item)}>
                <View className='common_menu_title_name'>{item.name}</View>
                <View className='common_menu_title_icon' />
              </View>
              {item.isShowMore && item.apiList.map((api, aIdx) => {
                return <View className='index_main_btn' onClick={this.onHandleApiClick.bind(null, api)} key={aIdx} >
                    <AtButton type='primary'>{api.name}</AtButton>
                </View>
              })}
            </View>
          })}
        </View>
      </View>
    )
  }
}

