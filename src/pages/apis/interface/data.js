const menusData = [
  {
    name: '交互反馈',
    children: [
      {
        name: '显示消息提示框',
        type: 'obj',
        obj: {
          title: '成功',
          icon: 'success'
        },
        env: ['WEB', 'WEAPP', 'RN'],
        methods: 'showToast'
      },
      {
        name: '隐藏消息提示框',
        type: '',
        obj: {},
        env: ['WEB', 'WEAPP', 'RN'],
        methods: 'hideToast'
      },
      {
        name: '显示 loading 提示框',
        type: 'obj',
        obj: {
          title: '加载中...',
        },
        env: ['WEB', 'WEAPP', 'RN'],
        methods: 'showLoading'
      },
      {
        name: '隐藏 loading 提示框',
        type: '',
        obj: {},
        env: ['WEB', 'WEAPP', 'RN'],
        methods: 'hideLoading'
      },
      {
        name: '​显示模态弹窗',
        type: 'obj',
        obj: {
          title: '​显示模态弹窗',
        },
        env: ['WEB', 'WEAPP', 'RN'],
        methods: 'showModal'
      },
      {
        name: '显示操作菜单',
        type: 'obj',
        obj: {
          itemList: ['a', 'b', 'c']
        },
        env: ['WEB', 'WEAPP', 'RN'],
        methods: 'showActionSheet'
      }
    ]
  },
  {
    name: '设置导航条',
    children: [
      {
        name: 'setNavigationBarTitle',
        type: 'obj',
        obj: {
          title: '更改了当前页面的标题'
        },
        env: ['WEAPP'],
        methods: 'setNavigationBarTitle'
      },
      {
        name: 'showNavigationBarLoading',
        type: '',
        obj: {},
        env: ['WEAPP'],
        methods: 'showNavigationBarLoading'
      },
      {
        name: 'hideNavigationBarLoading',
        type: '',
        obj: {},
        env: ['WEAPP'],
        methods: 'hideNavigationBarLoading'
      },
      {
        name: 'setNavigationBarColor',
        type: 'obj',
        obj: {
          frontColor: '#ffffff',
          backgroundColor: '#ff0000',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        },
        env: ['WEAPP'],
        methods: 'setNavigationBarColor'
      }
    ]
  },
  {
    name: '设置TabBar',
    type: 'tabbar',
    children: [
      {
        name: 'setTabBarBadge',
        type: 'obj',
        obj: {
          index: 0,
          text: '1'
        },
        env: ['WEAPP'],
        methods: 'setTabBarBadge'
      },
      {
        name: 'removeTabBarBadge',
        type: 'obj',
        obj: {
          index: 0,
        },
        env: ['WEAPP'],
        methods: 'removeTabBarBadge'
      },
      {
        name: 'showTabBarRedDot',
        type: 'obj',
        obj: {
          index: 0,
        },
        env: ['WEAPP'],
        methods: 'showTabBarRedDot'
      },
      {
        name: 'hideTabBarRedDot',
        type: 'obj',
        obj: {
          index: 0,
        },
        env: ['WEAPP'],
        methods: 'hideTabBarRedDot'
      },
      {
        name: 'setTabBarStyle',
        type: 'obj',
        obj: {
          color: '#FF0000',
          selectedColor: '#00FF00',
          backgroundColor: '#0000FF',
          borderStyle: 'white'
        },
        env: ['WEAPP'],
        methods: 'setTabBarStyle'
      },
      {
        name: 'setTabBarItem',
        type: 'obj',
        obj: {
          index: 0,
          text: '改变list'
        },
        env: ['WEAPP'],
        methods: 'setTabBarItem'
      },
      {
        name: 'showTabBar',
        type: 'obj',
        obj: {
          animation: true
        },
        env: ['WEAPP'],
        methods: 'showTabBar'
      },
      {
        name: 'hideTabBar',
        type: 'obj',
        obj: {
          animation: true
        },
        env: ['WEAPP'],
        methods: 'hideTabBar'
      }
    ]
  },
  {
    name: '设置置顶信息',
    children: [
      {
        name: 'setTopBarText',
        type: 'obj',
        obj: {
          text: 'hello, world!'
        },
        env: ['WEAPP'],
        methods: 'setTopBarText'
      }
    ]
  },
  {
    name: '导航',
    children: [
      {
        name: 'navigateTo',
        type: 'obj',
        obj: {
          icon: 'none',
          title: '当前环境支持navigateTo'
        },
        env: ['WEAPP', 'WEB', 'RN'],
        methods: 'showToast'
      },
      {
        name: 'redirectTo',
        type: 'obj',
        obj: {
          icon: 'none',
          title: '当前环境支持redirectTo'
        },
        env: ['WEAPP', 'WEB', 'RN'],
        methods: 'showToast'
      },
      {
        name: 'switchTab',
        type: 'obj',
        obj: {
          icon: 'none',
          title: '当前环境支持switchTab'
        },
        env: ['WEAPP', 'RN'],
        methods: 'showToast'
      },
      {
        name: 'navigateBack',
        type: 'obj',
        obj: {
          icon: 'none',
          title: '当前环境支持navigateBack'
        },
        env: ['WEAPP', 'WEB', 'RN'],
        methods: 'showToast'
      },
      {
        name: 'reLaunch',
        type: 'obj',
        obj: {
          icon: 'none',
          title: '当前环境支持reLaunch'
        },
        env: ['WEAPP', 'RN'],
        methods: 'showToast'
      }
    ]
  },
  {
    name: '动画',
    type: 'animation',
    children: [
      {
        name: 'createAnimation',
        type: 'animation',
        obj: {
          transformOrigin: 'left top 0',
          duration: 2000,
          timingFunction: "ease",
          delay: 0,
        },
        env: ['WEAPP'],
        methods: 'createAnimation'
      }
    ]
  },
  {
    name: '位置',
    children: [
      {
        name: 'pageScrollTo',
        type: 'obj',
        obj: {
          scrollTop: 0,
          duration: 300
        },
        env: ['WEAPP'],
        methods: 'pageScrollTo'
      }
    ]
  },
  {
    name: '绘图',
    type: 'canvas',
    children: [
      {
        name: 'createCanvasContext',
        type: 'canvas',
        env: ['WEAPP'],
        methods: 'createCanvasContext'
      },
      {
        name: 'createContext',
        type: 'canvas',
        env: ['WEAPP'],
        methods: 'createContext'
      },
      {
        name: 'drawCanvas',
        type: 'canvas',
        env: ['WEAPP'],
        methods: 'drawCanvas'
      }
    ]
  },
  {
    name: '下拉刷新',
    children: [
      {
        name: 'startPullDownRefresh',
        type: 'obj',
        obj: {
          icon: 'none',
          title: '当前环境支持startPullDownRefresh'
        },
        env: ['WEAPP'],
        methods: 'showToast'
      },
      {
        name: 'stopPullDownRefresh',
        type: 'obj',
        obj: {
          icon: 'none',
          title: '当前环境支持stopPullDownRefresh'
        },
        env: ['WEAPP'],
        methods: 'showToast'
      }
    ]
  },
  {
    name: 'WXML节点信息',
    type: 'selector',
    children: [
      {
        name: 'createSelectorQuery',
        type: 'selector',
        obj: {
          icon: 'none',
          title: '当前环境支持createSelectorQuery'
        },
        env: ['WEAPP', 'WEB'],
        methods: 'createSelectorQuery'
      },
      {
        name: 'selectorQuery.in',
        type: 'selector',
        obj: {
          icon: 'none',
          title: '当前环境支持selectorQuery.in'
        },
        env: ['WEAPP', 'WEB'],
        methods: 'in'
      },
      {
        name: 'selectorQuery.select',
        type: 'selector',
        obj: {
          icon: 'none',
          title: '当前环境支持selectorQuery.selectAll'
        },
        env: ['WEAPP', 'WEB'],
        methods: 'select'
      },
      {
        name: 'selectorQuery.selectAll',
        type: 'selector',
        obj: {
          icon: 'none',
          title: '当前环境支持selectorQuery.selectAll'
        },
        env: ['WEAPP', 'WEB'],
        methods: 'selectAll'
      },
      {
        name: 'selectorQuery.selectViewport',
        type: 'selector',
        obj: {
          icon: 'none',
          title: '当前环境支持selectorQuery.selectViewport'
        },
        env: ['WEAPP', 'WEB'],
        methods: 'selectViewport'
      },
      {
        name: 'nodesRef.boundingClientRect',
        type: 'selector',
        obj: {
          icon: 'none',
          title: '当前环境支持nodesRef.boundingClientRect'
        },
        env: ['WEAPP', 'WEB'],
        methods: 'boundingClientRect'
      },
      {
        name: 'nodesRef.scrollOffset',
        type: 'selector',
        obj: {
          icon: 'none',
          title: '当前环境支持nodesRef.scrollOffset'
        },
        env: ['WEAPP', 'WEB'],
        methods: 'scrollOffset'
      },
      {
        name: 'selectorQuery.exec',
        type: 'selector',
        obj: {
          icon: 'none',
          title: '当前环境支持selectorQuery.exec'
        },
        env: ['WEAPP', 'WEB'],
        methods: 'exec'
      }
    ]
  }
]

export default menusData
