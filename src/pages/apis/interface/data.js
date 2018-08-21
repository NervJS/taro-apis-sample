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
        env: ['WEB', 'weapp', 'rn'],
        methods: 'showToast'
      },
      {
        name: '隐藏消息提示框',
        type: '',
        obj: {},
        env: ['WEB', 'weapp', 'rn'],
        methods: 'hideToast'
      },
      {
        name: '显示 loading 提示框',
        type: 'obj',
        obj: {
          title: '加载中...',    
        },
        env: ['WEB', 'weapp', 'rn'],
        methods: 'showLoading'
      },
      {
        name: '隐藏 loading 提示框',
        type: '',
        obj: {},
        env: ['WEB', 'weapp', 'rn'],
        methods: 'hideLoading'
      },
      {
        name: '​显示模态弹窗',
        type: 'obj',
        obj: {
          title: '​显示模态弹窗',    
        },
        env: ['WEB', 'weapp', 'rn'],
        methods: 'showModal'
      },
      {
        name: '显示操作菜单',
        type: 'obj', 
        obj: {
          itemList: ['a', 'b', 'c']   
        },
        env: ['WEB', 'weapp', 'rn'],
        methods: 'showActionSheet'
      }
    ]
  },
  {
    name: '设置导航条',
    children: [
      {
        name: 'setTabBarBadge',
        type: 'obj',
        obj: {
          title: '当前页面'  
        },
        env: ['weapp'],
        methods: 'setTabBarBadge'
      },
      {
        name: '在当前页面显示导航条加载动画',
        type: '',
        obj: {},
        env: ['weapp'],
        methods: 'showNavigationBarLoading'
      },
      {
        name: '隐藏导航条加载动画',
        type: '',
        obj: {},
        env: ['weapp'],
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
        env: ['weapp'],
        methods: 'hideNavigationBarLoading'
      }
    ]
  },
  {
    name: '设置TabBar',
    children: [
      {
        name: 'setTabBarBadge',
        type: 'obj',
        obj: {
          index: 0,
          text: '1'
        },
        env: ['weapp'],
        methods: 'setTabBarBadge'
      },
      {
        name: 'removeTabBarBadge',
        type: 'obj',
        obj: {
          index: 0,
        },
        env: ['weapp'],
        methods: 'removeTabBarBadge'
      },
      {
        name: 'showTabBarRedDot',
        type: 'obj',
        obj: {
          index: 0,
        },
        env: ['weapp'],
        methods: 'showTabBarRedDot'
      },
      {
        name: 'hideTabBarRedDot',
        type: 'obj',
        obj: {
          index: 0,
        },
        env: ['weapp'],
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
        env: ['weapp'],
        methods: 'setTabBarStyle'
      },
      {
        name: 'setTabBarItem',
        type: 'obj',
        obj: {
          index: 0,
          text: 'text',
          iconPath: '/path/to/iconPath',
          selectedIconPath: '/path/to/selectedIconPath'
        },
        env: ['weapp'],
        methods: 'setTabBarItem'
      },
      {
        name: 'showTabBar',
        type: 'obj',
        obj: {
          animation: true
        },
        env: ['weapp'],
        methods: 'showTabBar'
      },
      {
        name: 'hideTabBar',
        type: 'obj',
        obj: { 
          animation: true
        },
        env: ['weapp'],
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
          title: '当前页面'
        },
        env: ['weapp'],
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
          url: 'test?id=1'
        },
        env: ['weapp'],
        methods: 'navigateTo'
      }
    ]
  },
  {
    name: '动画',
    children: [
     
    ]
  },
  {
    name: '下拉刷新',
    children: [
     
    ]
  },
  {
    name: '节点信息',
    children: [
     
    ]
  }
]

export default menusData