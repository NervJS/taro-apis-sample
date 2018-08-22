import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.scss'

export default class Network extends Component {
  config = {
    navigationBarTitleText: '网络相关API展示页'
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
    if (api.method === 'request') {
      this.request()
    } else if (api.method === 'uploadFile' || api.method === 'downloadFile') {
      Taro.showToast({
        icon: 'none',
        title: env === 'WEAPP' ? `${env}环境下支持 Taro.${api.method} API` : `${env}环境下不支持 Taro.${api.method} API`
      })
    } else {
      Taro.showToast({
        icon: 'none',
        title: `${env}环境下支持 ${api.method} API`
      })
    }
  }

  request = async () => {
    let { githubData, isShowRequest } = this.state
    if (githubData.length === 0) {
      Taro.showToast({
        icon: 'none',
        title: '请求了GitHub上与JavaScript相关的排名前十的项目'
      })
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
      githubData,
      isShowRequest: !isShowRequest
    })
  }

  render() {
    const { meun, githubData, isShowRequest, isShowResult } = this.state

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
          <Text className='common_title'>Network</Text>
        </View>
        {isShowResult && <View className='common_show_box'>
          <View className='common_show_box_title'>API效果展示</View>
          {isShowRequest && githubDataDom}
        </View>}
        <View className='index_main'>
          {meun.map((item, idx) => {
            return <View className={item.isShowMore ? 'common_menu active' : 'common_menu'} key={idx}>
              <View className='common_menu_title' onClick={this.onHandleTitleClick.bind(null, item)}>
                <View className='common_menu_title_name'>{item.name}</View>
                <View className='common_menu_title_icon' />
              </View>
              {item.isShowMore && item.apiList.map((api, aIdx) => {
                return <View className='index_main_item' key={aIdx} >
                  <Button
                    className='oprate_btn'
                    hoverClass='btn_hover'
                    onClick={this.this.onHandleApiClick.bind(null, api)}
                  >{api.name}</Button>
                </View>
              })}
            </View>
          })}
          {/* <View className='common_menu'>
            <View className='common_menu_title'>
              <View className='common_menu_title_name'>发送请求</View>
              <View className='common_menu_title_icon'></View>
            </View>
            <View className='index_main_item'>
              <Button
                className='oprate_btn'
                hoverClass='btn_hover' 
                onClick={this.onRequest}
              >Taro.request</Button>
              {isShowRequest && <View className='index_main_item_show'>
                <View className='request_text'>与JavaScript相关的GitHub排名：</View>
                <View className='request_wp'>
                  {githubData.map((item, idx) => {
                    return <View className='request_item' key={idx}>
                      <Text className='request_item_text'>仓库名称：{item.name}</Text>
                      <Text className='request_item_text'>star数: {item.stars}个</Text>
                      <View className='request_item_view'>图标:<Image src={item.avatar_url} /></View>
                    </View>
                  })}
                </View>
              </View>}
            </View>
          </View> */}
        </View>
      </View>
    )
  }
}

