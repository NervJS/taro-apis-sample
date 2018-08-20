export const menusData = [
  {
    name: '交互反馈',
    children: [
      {
        name: '显示消息提示框',
        type: 'show',
        env: ['WEB', 'weapp', 'rn'],
        methods: 'showToast'
      },
      {
        name: '隐藏消息提示框',
        type: 'hide',
        env: ['WEB', 'weapp', 'rn'],
        methods: 'hideToast'
      },
      {
        name: '显示 loading 提示框',
        type: 'show',
        env: ['WEB', 'weapp', 'rn'],
        methods: 'showLoading'
      },
      {
        name: '隐藏 loading 提示框',
        type: 'hide',
        env: ['WEB', 'weapp', 'rn'],
        methods: 'hideLoading'
      },
      {
        name: '​显示模态弹窗',
        type: 'show',
        env: ['WEB', 'weapp', 'rn'],
        methods: 'showModal'
      },
      {
        name: '显示操作菜单',
        type: 'show',
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
        type: 'show',
        env: ['weapp'],
        methods: 'setTabBarBadge'
      },
      {
        name: '在当前页面显示导航条加载动画',
        type: 'show',
        env: ['weapp'],
        methods: 'showNavigationBarLoading'
      },
      {
        name: '隐藏导航条加载动画',
        type: 'show',
        env: ['weapp'],
        methods: 'hideNavigationBarLoading'
      },
      {
        name: 'setNavigationBarColor',
        type: 'show',
        env: ['weapp'],
        methods: 'hideNavigationBarLoading'
      }
    ]
  },
  {
    name: '设置TabBar',
    children: [
      {
        name: '显示消息提示框',
        type: 'show',
        methods: 'showToast'
      }
    ]
  },
  {
    name: '设置置顶信息',
    children: [
      {
        name: '显示消息提示框',
        type: 'show',
        methods: 'showToast'
      }
    ]
  },
  {
    name: '导航',
    children: [
      {
        name: '显示消息提示框',
        type: 'show',
        methods: 'showToast'
      }
    ]
  },
  {
    name: '动画',
    children: [
      {
        name: '显示消息提示框',
        type: 'show',
        methods: 'showToast'
      }
    ]
  },
  {
    name: '下拉刷新',
    children: [
      {
        name: '显示消息提示框',
        type: 'show',
        methods: 'showToast'
      }
    ]
  },
  {
    name: '节点信息',
    children: [
      {
        name: '显示消息提示框',
        type: 'show',
        methods: 'showToast'
      }
    ]
  }
]