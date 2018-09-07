import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'

import './index.scss'
import menusData from './data'

export default class Location extends Component {

  config = {
    navigationBarTitleText: '界面'
  }

  state = {
    componentName: '界面',
    currentIndex: -1,
    resultText: ''
  }

  handleMenuItem({ methods, type, env, obj = {}, name}) {
    const nowEnv = Taro.getEnv()
    if (env.indexOf(nowEnv) === -1) {
      this.setState({
        resultText: `该api暂不支持${nowEnv}环境`
      })
      return
    }
    if (type === 'selector') {
      let query = Taro.createSelectorQuery()
      switch (methods) {
        case 'createSelectorQuery':
          this.setState({
            resultText: `成功创建了SelectorQuery对象实例`
          })
          break
        case 'in':
          query = query.in(this.$scope)
          this.setState({
            resultText: `选取范围更改为自定义组件component内，（注：在h5中不起作用）`
          })
          break
        case 'select':
          query
            .select('.common_title')
            .boundingClientRect( rect => {
              this.setState({
                resultText: `选取的是标题节点的相关信息； \n ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break
        case 'selectAll':
          query
            .selectAll('.common_menu_title')
            .boundingClientRect( rect => {
              this.setState({
                resultText: `匹配出.common_menu_title的所有节点； \n ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break
        case 'selectViewport':
          query
            .selectViewport()
            .boundingClientRect( rect => {
              this.setState({
                resultText: `当前显示区域相关信息； \n ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break
        case 'boundingClientRect':
          query
            .select('.common_title')
            .boundingClientRect( rect => {
              this.setState({
                resultText: `返回节点信息的位置left、right等字段描述； \n ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break
        case 'scrollOffset':
          query
            .selectViewport()
            .scrollOffset( rect => {
              this.setState({
                resultText: `节点的滚动位置${rect.scrollTop}${rect.scrollLeft}`
              })
            })
            .exec()
          break 
        case 'exec':
          query
            .selectViewport()
            .scrollOffset( rect => {
              this.setState({
                resultText: `执行了exec方法； 获得了节点的滚动位置${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break     
          
      }
    } else if (type === 'obj') {
      if (methods === 'showToast' && name !== '显示消息提示框') {
        const title = obj.title
        this.setState({
          resultText: title
        })
      } else {
        this.setState({
          resultText: `${name} api已执行`
        })
        Taro[methods](obj)
      }
    } else if (type === 'tabbar') {
      this.setState({
        resultText: `当前环境支持 ${name}`
      })
    } else {
      this.setState({
        resultText: `${name} api已执行`
      })
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
      currentIndex,
      resultText
    } = this.state
    return (
      <View className='interface'>
        <View className='common_tips'>
          <Text className='common_tip_text'>这里展示的是Taro官方端能力，将展示基本API的调用方式及效果</Text>
        </View>
        <View className='common_header'>
          <Text className='common_title'>{componentName}</Text>
        </View>
        <View>
          <AtCard title='API效果展示'>
            <View style='word-wrap: break-word'>
              {resultText}
            </View>
          </AtCard>
        </View>
        <View className='interface_main'>
          {menusData.map((menu, index) => {
              return (
                <View className={currentIndex === index ? 'common_menu active' : 'common_menu'} key={index}>
                  <View  className='common_menu_title'  onClick={this.handleMenu.bind(this, index)}>
                    <Text className='common_menu_title_name'>{menu.name}</Text>
                    <Text className='common_menu_title_icon'></Text>
                  </View>
                  {currentIndex === index && menu.children.map((item, aIdx) => {
                    return (
                      <View className='interface_main_btn' onClick={this.handleMenuItem.bind(this, item)} key={aIdx} >
                        <AtButton type='primary' >{item.name}</AtButton>
                      </View>
                    )
                  })}
                </View>
              )
            })}
        </View>
      </View>
    )
  }
}

