import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtListItem } from 'taro-ui'
import classNames from 'classnames'

import './index.scss'
import menusData from './menu'

export default class Index extends Component {
  state = {
    list: []
  }

  config = {
    navigationBarTitleText: 'Taro 接口能力展示'
  }

  componentWillMount () {
    this.setState({ ...menusData })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onGotoNetwork (url) {
    url && Taro.navigateTo({ url })
  }

  onToggleSubMenu (index) {
    this.setState(prev => ({
        list: prev.list.map((item, i) => index === i ? Object.assign({}, item, { isUnfold: !item.isUnfold }) : item)
    }))
  }

  render () {
    const { desc, list } = this.state

    return (
      <View className='index'>
        <View className='index__top'>
          <Text className='index__top-text'>{desc}</Text>
        </View>
        <View className='index__main'>
          {list.map((item, index) => item.subList
            ? <View className='index__main-sub' key={index}>
                <Text className='index__main-sub-title' onClick={this.onToggleSubMenu.bind(this, index)} >{item.name}</Text>
                {item.subList && (
                  <View className={classNames('index__main-sub-list', { 'index__main-sub-list--unfold': item.isUnfold })}>
                    {item.subList.map(page =>
                      <AtListItem
                        title={page.name}
                        arrow='right'
                        key={page.name}
                        onClick={this.onGotoNetwork.bind(this, page.url)}
                      />)}
                  </View>
                )}
              </View>
            : <View className='index__main-sub' onClick={this.onGotoNetwork.bind(this, item.url)} key={index}>
                <Text className='index__main-sub-title'>{item.name}</Text>
              </View>
          )}
        </View>
      </View>
    )
  }
}

