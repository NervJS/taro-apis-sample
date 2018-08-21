import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import './index.scss'
import menusData from './data'

export default class Location extends Component {

  config = {
    navigationBarTitleText: '网络相关API展示页'
  }

  state = {
    componentName: '界面',
    currentIndex: 0
  }

  componentWillMount () { }

  componentDidMount () { 
   
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleMenuItem (methods, type, env, obj={}) {
    if (env.indexOf(Taro.getEnv()) === -1) {
      Taro.showToast({
        icon: 'none',
        title: `该api暂不支持${Taro.getEnv()}`
      })
      return
    }
    if (type === 'obj') {
      Taro[methods](obj)
    } else {
      Taro[methods]()
    }
   
  }
  handleMenu (index) {
    this.setState({
      currentIndex: this.state.currentIndex === index ? -1 : index
    })
  }
  render () {
    const { 
      componentName,
      currentIndex
    } = this.state
    return (
      <View className='interface'>
        <View className='common_tips'>
          <Text className='common_tip_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='common_header'>
          <Text className='common_title'>{componentName}</Text>
        </View>
        <View className='interface_menu'>
          {
           menusData.map((menu, index) => {
              return (
                <View className={currentIndex === index ? 'menu active' : 'menu'} key={index}>
                  <View 
                    className='menu_title' 
                    onClick={this.handleMenu.bind(this, index)}>
                    <Text className='menu_title_name'>{menu.name}</Text>
                    <Text className='menu_title_icon'></Text>
                  </View>
                  { 
                    currentIndex === index && menu.children.map((item) => {
                      return (
                        <Button 
                          className='menu_item' 
                          onClick={this.handleMenuItem.bind(this, item.methods, item.type, item.env, item.obj)}
                        >
                          {item.name}
                        </Button>
                      )
                    })
                  }
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

