import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Header extends Component {
  render () {
    return (
      <View className='header'>
        <Text className='title'>{this.props.title}</Text>
      </View>
    )
  }
}
