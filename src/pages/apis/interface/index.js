import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import './index.scss'
import menusData from './data'

export default class Location extends Component {

  config = {
    navigationBarTitleText: '网络相关API展示页'
  }

  state = {
    componentName: '界面',
    currentIndex: 0,
    animationObj: '',
    resultText: ''
  }

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleMenuItem (methods, type, env, obj={}) {
    const nowEnv = Taro.getEnv()
    if (env.indexOf(nowEnv) === -1) {
      Taro.showToast({
        icon: 'none',
        title: `该api暂不支持${nowEnv}环境`
      })
      this.setState({
        resultText: ` 该 api 暂不支持 ${nowEnv} 环境 `
      })
      return
    }
    if (type === 'animation') {
      let animationObj = Taro[methods](obj)
      animationObj.rotate(150).step()
      this.setState({
        animationObj: animationObj.export()
      })
    } else if (type === 'selector') {
      let query = Taro.createSelectorQuery()
      switch (methods) {
        case 'createSelectorQuery':
          this.setState({
            resultText: ` 成功创建了 SelectorQuery 对象实例 `
          })
          break
        case 'in':
          query = query.in(this.$scope)
          this.setState({
            resultText: ` 选取范围更改为自定义组件 component 内，（注：在 h5 中不起作用）`
          })
          break
        case 'select':
          query
            .select('.common_title')
            .boundingClientRect( rect => {
              this.setState({
                resultText: ` 选取的是标题节点的相关信息； \n ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break
        case 'selectAll':
          query
            .selectAll('.common_menu_title')
            .boundingClientRect( rect => {
              this.setState({
                resultText: ` 匹配出. common_menu_title 的所有节点； \n ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break
        case 'selectViewport':
          query
            .selectViewport()
            .boundingClientRect( rect => {
              this.setState({
                resultText: ` 当前显示区域相关信息； \n ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break
        case 'boundingClientRect':
          query
            .select('.common_title')
            .boundingClientRect( rect => {
              this.setState({
                resultText: ` 返回节点信息的位置 left、right 等字段描述； \n ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break
        case 'scrollOffset':
          query
            .selectViewport()
            .scrollOffset( rect => {
              this.setState({
                resultText: ` 节点的滚动位置 ${rect.scrollTop}${rect.scrollLeft}`
              })
            })
            .exec()
          break
        case 'exec':
          query
            .selectViewport()
            .scrollOffset( rect => {
              this.setState({
                resultText: ` 执行了 exec 方法； 获得了节点的滚动位置 ${JSON.stringify(rect, 2)}`
              })
            })
            .exec()
          break

      }
    } else if (type === 'canvas') {
      switch (methods) {
        case 'createCanvasContext':
          let context = Taro[methods]('canvasTest')
          context.setStrokeStyle("#00ff00")
          context.setLineWidth(5)
          context.rect(0, 0, 200, 200)
          context.stroke()
          context.setStrokeStyle("#ff0000")
          context.setLineWidth(2)
          context.moveTo(160, 100)
          context.arc(100, 100, 60, 0, 2 * Math.PI, true)
          context.moveTo(140, 100)
          context.arc(100, 100, 40, 0, Math.PI, false)
          context.moveTo(85, 80)
          context.arc(80, 80, 5, 0, 2 * Math.PI, true)
          context.moveTo(125, 80)
          context.arc(120, 80, 5, 0, 2 * Math.PI, true)
          context.stroke()
          context.draw()
          break
        case 'createContext':
          let context2 = Taro.createContext()

          context2.rect(10, 10, 150, 75)
          context2.fill()
          context2.stroke()
          Taro.drawCanvas({
            canvasId: 'canvasTest',
            actions: context2.getActions()
          })
          Taro.showToast({
            icon: 'none',
            title: '不推荐使用'
          })
          break
        case 'drawCanvas':
          Taro.showToast({
            icon: 'none',
            title: '不推荐使用'
          })
          let context3 = Taro.createContext()

          context3.rect(10, 10, 150, 75)
          context3.setFillStyle('red')
          context3.fill()
          context3.stroke()
          Taro.drawCanvas({
            canvasId: 'canvasTest',
            actions: context3.getActions()
          })
          break
        default :
          console.warn('type传值有误')
      }

    } else if (type === 'obj') {
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
  goMenu = () => {
    Taro.navigateTo({url: '/pages/index/index'})
  }
  render () {
    const {
      componentName,
      currentIndex,
      animationObj,
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

        <View className='interface_menu'>
          {
           menusData.map((menu, index) => {
              return (
                <View className={currentIndex === index ? 'menu active' : 'menu'} key={index}>

                  <View
                    className='menu_title'
                    onClick={this.handleMenu.bind(this, index)}
                  >
                    <Text className='menu_title_name'>{menu.name}</Text>
                    <Text className='menu_title_icon'></Text>
                  </View>
                  {
                    currentIndex === index && menu.type === 'selector' &&
                    <View>
                      <AtCard title='API 效果展示'>
                        <View style='word-wrap: break-word'>
                          {resultText}
                        </View>
                      </AtCard>
                     </View>
                  }
                  {
                    currentIndex === index && menu.type === 'canvas' &&
                    <View>
                      <AtCard title='API 效果展示'>
                        <View style='word-wrap: break-word'>
                          <canvas style='width: 300px; height: 200px;' canvas-id='canvasTest'></canvas>
                        </View>
                      </AtCard>
                   </View>

                  }
                  {
                    currentIndex === index && menu.children.map((item, ind) => {
                      return (
                        <View
                          key={ind}
                          className='menu_item'
                        >
                          <AtButton
                            type='primary'
                            onClick={this.handleMenuItem.bind(this, item.methods, item.type, item.env, item.obj)}
                          >
                            {item.name}
                          </AtButton>
                        </View>
                      )
                    })
                  }
                  {
                    currentIndex === index && menu.type === 'animation' &&
                    <View className='animation' animation={animationObj}>我在做动画</View>
                  }
                </View>
              )
            })
          }
        </View>
        <View className='go_menu_btn' onClick={this.goMenu}>
            返回首页
        </View>

      </View>
    )
  }
}

