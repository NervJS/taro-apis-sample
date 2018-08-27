import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { AtButton } from 'taro-ui'
import Header from '../../../../components/header'

import './index.scss'

export default class NetworkType extends Component {
  state = {
    networkType: '',
    type: ''
  }

  config = {
    navigationBarTitleText: '设备'
  }

  componentWillMount () {
    Taro.getNetworkType()
      .then(res => {
        if (res && res.networkType) this.setState({ type: res.networkType })
      })
    Taro.onNetworkStatusChange(res => {
      if (res && typeof res === 'object') this.setState({ type: res.networkType })
    })
  }

  async getNetworkType () {
    const res = await Taro.getNetworkType()
    if (res && res.networkType) this.setState({ networkType: res.networkType })
  }

  clearNetworkType () {
    this.setState({ networkType: '' })
  }

  render () {
    const { networkType, type } = this.state

    return (
      <View className='system'>
        <Header title='getNetworkType' />

        <View className='system__box'>
          <View className='system__box-title'>网络状态</View>
          <View className={classNames('system__box-type', { 'system__box-type--null': !networkType })}>
            {networkType.toUpperCase() || '未获取'}
          </View>
        </View>

        <View className='system__btns'>
          <View className='system__btn'>
            <AtButton type='primary' onClick={this.getNetworkType.bind(this)}>获取手机网络状态</AtButton>
          </View>
          <View className='system__btn'>
            <AtButton onClick={this.clearNetworkType.bind(this)}>清空</AtButton>
          </View>
        </View>


        <Header title='onNetworkStatusChagne' />
        <View className='system__box'>
          <View className='system__box-title'>网络状态</View>
          <View className={classNames('system__box-type', { 'system__box-type--null': !type })}>
            {type.toUpperCase() || ''}
          </View>
        </View>
      </View>
    )
  }
}
