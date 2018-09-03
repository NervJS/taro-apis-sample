import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtForm, AtInput } from 'taro-ui'
import Header from '../../../components/header'

import './index.scss'

export default class Storage extends Component {
  state = {
    storageKey: '',
    storageValue: ''
  }

  config = {
    navigationBarTitleText: '数据缓存'
  }

  handleInput (type, value) {
    if (type === 'key') {
      this.setState({
        storageKey: value
      })
    } else if (type === 'value') {
      this.setState({
        storageValue: value
      })
    }
  }

  async handleStorage (type) {
    const { storageKey: key, storageValue: data } = this.state

    let title = ''
    let content = ''

    switch (type) {
      case 'setStorage':
        if (!key || !data) {
          title = '保存数据失败',
          content = `${!key ? 'key' : (!data ? 'value' : '')} 不能为空`
          break
        }
        await Taro.setStorage({ key, data })
        content = '储存数据成功'
        break

      case 'getStorage':
        if (!key) {
          title = '读取数据失败'
          content = 'key 不能为空'
          break
        }

        try {
          const res = await Taro.getStorage({ key })
          title = '读取数据成功'
          content = `data: '${res.data}'`
        } catch (err) {
          title = '读取数据失败'
          content = '找不到 key 对应的数据'
        }
        break

      case 'removeStorage':
        if (!key) {
          title = '移除指定数据失败',
          content = 'key 不能为空'
          break
        }
        await Taro.removeStorage({ key })
        content = '移除指定数据成功'
        break

      case 'clearStorage':
        await Taro.clearStorage()
        content = '清理数据成功'
        break

      default:
        title = 'type不存在'
    }

    const option = { showCancel: false }
    if (title) option.title = title
    if (content) option.content = content
    Taro.showModal(option)
  }

  render () {
    const {
      storageKey,
      storageValue
    } = this.state

    const btnList = [{
        name: '存储数据',
        style: 'primary',
        type: 'setStorage'
      }, {
        name: '读取数据',
        style: 'primary',
        type: 'getStorage'
      }, {
        name: '移除指定数据',
        style: 'secondary',
        type: 'removeStorage'
      }, {
        name: '清理数据',
        style: 'secondary',
        type: 'clearStorage'
      }
    ]

    return (
      <View className='storage'>
        <Header title='get/set/clearStorage' />

        <AtForm>
          <AtInput
            clear
            name='key'
            title='key'
            placeholder='请输入 key'
            value={storageKey}
            onChange={this.handleInput.bind(this, 'key')}
          />
          <AtInput
            clear
            name='value'
            title='value'
            border={false}
            placeholder='请输入 value'
            value={storageValue}
            onChange={this.handleInput.bind(this, 'value')}
          />
        </AtForm>

        <View className='storage__btns'>
          {
            btnList.map((item, index) =>
              <View className='storage__btn' key={index}>
                <AtButton
                  type={item.style}
                  onClick={this.handleStorage.bind(this, item.type)}
                >
                  {item.name}
                </AtButton>
              </View>
            )
          }
        </View>
      </View>
    )
  }
}

