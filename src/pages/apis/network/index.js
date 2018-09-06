import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'

export default class Network extends Component {
  config = {
    navigationBarTitleText: '网络'
  }

  state = {
    meun: [{
      id: 1,
      isShowMore: false,
      name: '发送请求',
      apiList: [{
        name: 'Taro.request',
        method: 'request'
      }]
    }, {
      id: 2,
      isShowMore: false,
      name: '上传、下载',
      apiList: [{
        name: 'Taro.uploadFile',
        method: 'uploadFile'
      }, {
        name: 'Taro.downloadFile',
        method: 'downloadFile'
      }]
    }, {
      id: 3,
      isShowMore: false,
      name: 'WebSocket',
      apiList: [{
        name: 'Taro.connectSocket',
        method: 'Taro.connectSocket'
      }, {
        name: 'SocketTask',
        method: 'SocketTask'
      }, {
        name: 'SocketTask.close',
        method: 'close'
      }, {
        name: 'SocketTask.onOpen',
        method: 'onOpen'
      }, {
        name: 'SocketTask.onClose',
        method: 'onClose'
      }, {
        name: 'SocketTask.onError',
        method: 'onError'
      }]
    }],
    showDesc: '',
    githubData: [],
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
    let isShowRequest
    if (api.method === 'request') {
      this.request()
      isShowRequest = true
      showDesc = `${env}环境下支持 ${api.method} API; 请求了GitHub上与JavaScript相关的排名前十的项目`
    } else if (api.method === 'uploadFile' || api.method === 'downloadFile') {
      isShowRequest = false
      showDesc = env === 'WEAPP' ? `${env}环境下支持 Taro.${api.method} API` : `${env}环境下不支持 Taro.${api.method} API`
    } else {
      isShowRequest = false
      showDesc = `${env}环境下支持 ${api.method} API`
    }
    this.setState({
      showDesc,
      isShowRequest
    })
  }

  request = async () => {
    let { githubData } = this.state
    if (githubData.length === 0) {
      const res = await Taro.request({
        url: 'https://api.github.com/search/repositories?q=language:javascript&location:China&sort=stars'
      })
      githubData = res.data.items.slice(0, 10).map((item) => {
        return {
          name: item.name,
          stars: item.stargazers_count,
          avatar_url: item.owner.avatar_url
        }
      })
    }
    this.setState({
      githubData
    })
  }

  render() {
    const { meun, showDesc, githubData, isShowRequest, isShowResult } = this.state

    const githubDataDom = <View className='index_main_item_show'>
      <View className='request_text'>与JavaScript相关的GitHub排名：</View>
      <View className='request_wp'>
        {githubData.map((git, gIdx) => {
          return <View className='request_item' key={gIdx}>
            <Text className='request_item_text'>仓库名称：{git.name}</Text>
            <Text className='request_item_text'>star数: {git.stars}个</Text>
            <View className='request_item_view'>图标:<Image src={git.avatar_url} /></View>
          </View>
        })}
      </View>
    </View>

    return (
      <View className='index'>
        <View className='common_tips'>
          <Text className='common_tip_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='common_header'>
          <Text className='common_title'>网络</Text>
        </View>
        {isShowResult && <View>
          <AtCard title='API效果展示'>
            {showDesc}
            {isShowRequest && githubDataDom}
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

