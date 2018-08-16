import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Input } from '@tarojs/components'

import './index.scss'

export default class Storage extends Component {

  config = {
    navigationBarTitleText: '网络相关API展示页'
  }

  state = {
    componentName: 'Storage',
    storageKey: '',
    storageValue: '',
    btnList: [
      {
        name: '同步设置Storage',
        type: 'setStorageSync'
      },
      {
        name: '同步读取Storage',
        type: 'getStorageSync'
      },
      {
        name: '同步清除Storage',
        type: 'clearStorageSync'
      },
      {
        name: '异步设置Storage',
        type: 'setStorage'
      },
      {
        name: '异步读取Storage',
        type: 'getStorage'
      },
      {
        name: '异步清除Storage',
        type: 'clearStorage'
      }
    ]
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleInput (type, { detail }) {
    console.log(detail)
    if (type === 'key') {
      this.setState({
        storageKey: detail.value
      })
    } else if (type === 'value') {
      this.setState({
        storageValue: detail.value
      })
    }
  }
  handleStorage = async (type) => {
    const { storageKey, storageValue } = this.state
    let title = ''
    if (!storageValue || !storageKey) {
      Taro.showToast({
        title: '请输入key和value'
      })
      return
    }
    switch (type) {
      case 'setStorageSync':
        Taro[type](storageKey, storageValue)
        title = `key: ${storageKey} value: ${storageValue}`
        break
      case 'getStorageSync': 
        const value = Taro[type](storageKey)
        title = `key: ${storageKey} value: ${value}`
        break
      case 'clearStorageSync': 
        Taro[type]()
        title = `同步清理成功`
        break
      case 'setStorage':
        await Taro[type]({
          key: storageKey,
          data: storageValue
        })
        title = `key: ${storageKey} value: ${storageValue}`    
        break
      case 'getStorage':
        try {
          const res = await Taro[type]({
            key: storageKey
          }) 
          console.log(res)
          title = `异步获取key: ${storageKey} value: ${storageValue}` 
        } catch (err) {
          console.log(err)
        } 
        break
      case 'clearStorage':
        await Taro[type]() 
        title = `异步清理成功`
        break
      default:   
        title = `type不存在`
    }
    Taro.showToast({
      icon: 'none',
      title
    })   
  }

  render () {
    const { 
      componentName, 
      storageKey, 
      storageValue,
      btnList 
    } = this.state
    return (
      <View className='storage'>
        <View className='common_tips'>
          <Text className='common_tip_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='common_header'>
          <Text className='common_title'>{componentName}</Text>
        </View>
        <View className='container'>
          <View className='detail'>
            <Text className='detail_text'>key:</Text>
            <Input 
              className='detail_input' 
              placeholder={'请输入key'} 
              value={storageKey} 
              onInput={this.handleInput.bind(this, 'key')}/>
          </View>
          <View className='detail'>
            <Text className='detail_text'>value:</Text>
            <Input 
              className='detail_input' 
              placeholder={'请输入value'} 
              value={storageValue} 
              onInput={this.handleInput.bind(this, 'value')}/>
          </View>
        </View>
        {
          btnList.map((item, index) => {
            return (
              <Button
                className='oprate_btn'
                hoverClass='btn_hover' 
                key={index} 
                onClick={this.handleStorage.bind(this, item.type)}>
                {item.name}
              </Button>
            )
          })
        }
      </View>
    )
  }
}

