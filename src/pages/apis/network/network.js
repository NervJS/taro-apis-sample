import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './network.scss'

export default class Network extends Component {
  config = {
    navigationBarTitleText: '网络相关API展示页'
  }

  state = {
    githubData: [],
    isShowRequest: false
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onRequest = async () => {
    let { githubData, isShowRequest } = this.state
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
      githubData,
      isShowRequest: !isShowRequest
    })
  }

  render() {
    const { githubData, isShowRequest } = this.state
    return (
      <View className='index'>
        <View className='index_top'>
          <Text className='index_top_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='index_main'>
          <View className='index_main_wp'>
            <View className='index_main_item'>
              <Button className='index_main_item_btn' onClick={this.onRequest}>Taro.request</Button>
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
          </View>
        </View>
      </View>
    )
  }
}

