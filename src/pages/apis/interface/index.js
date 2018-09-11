import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
import menusData from './data'

export default class Location extends Component {

  config = {
    navigationBarTitleText: '网络相关API展示页'
  }

  state = {
    componentName: '界面',
    currentIndex: 0,
    animationObj: ''
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
          Taro.showToast({
            icon: 'none',
            title: '成功创建SelectorQuery对象实例'
          })
          break
        case 'in':
          query = Taro.createSelectorQuery().in(this.$scope)
          console.log(query)
          Taro.showToast({
            icon: 'none',
            title: '选取范围更改为自定义组件component内,在h5中不起作用'
          })
          break
        case 'select':
          query
            .select('.common_title')
            .boundingClientRect( rect => {
              console.log(rect)
              Taro.showToast({
                icon: 'none',
                title: `id: ${rect.id};left:${rect.left}right:${rect.right};\ntop:${rect.top};width:${rect.width};height:${rect.height}`
              })
            })
            .exec()
          break
        case 'selectAll':
          query
            .selectAll('.menu_title')
            .boundingClientRect( rect => {
              console.log(rect)
              Taro.showToast({
                icon: 'none',
                title: `见控制台，打印出的匹配的.menu_title所有节点`
              })
            })
            .exec()
          break
        case 'selectViewport':
          query
            .selectViewport('.menu_title')
            .boundingClientRect( rect => {
              console.log(rect)
              Taro.showToast({
                icon: 'none',
                title: `当前显示区域的width:${rect.width};height:${rect.height};\n更多请查看控制台打印信息`
              })
            })
            .exec()
          break
        case 'boundingClientRect':
          query
            .selectViewport('.menu_title')
            .boundingClientRect( rect => {
              console.log(rect)
              Taro.showToast({
                icon: 'none',
                title: `返回节点信息的位置left、right等字段描述`
              })
            })
            .exec()
          break
        case 'scrollOffset':
          query
            .selectViewport()
            .scrollOffset( rect => {
              console.log(rect)
              Taro.showToast({
                icon: 'none',
                title: `节点的滚动位置${rect.scrollTop}${rect.scrollLeft}`
              })
            })
            .exec()
          break 
        case 'scrollOffset':
          query
            .selectViewport()
            .scrollOffset( rect => {
              console.log(rect)
              Taro.showToast({
                icon: 'none',
                title: `节点的滚动位置${rect.scrollTop}${rect.scrollLeft}`
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
  render () {
    const { 
      componentName,
      currentIndex,
      animationObj
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
                    currentIndex === index && menu.type === 'canvas' && 
                    <canvas style='width: 300px; height: 200px;' canvas-id='canvasTest'></canvas> 
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
      </View>
    )
  }
}

