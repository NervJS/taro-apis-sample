(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(7),r=_interopRequireDefault(a),u=_interopRequireDefault(n(0)),l=n(13),s=n(74),c=_interopRequireDefault(n(14));n(79);var f=_interopRequireDefault(n(81));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function Index(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(i))),n.state={"list":[]},n.config={"navigationBarTitleText":"Taro 接口能力展示"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.Component),i(Index,[{"key":"componentWillMount","value":function componentWillMount(){this.setState(o({},f.default))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"onGotoNetwork","value":function onGotoNetwork(e){if("/pages/apis/interface/index"===e&&"WEAPP"===r.default.getEnv())return r.default.switchTab({"url":e});e&&r.default.navigateTo({"url":e})}},{"key":"onToggleSubMenu","value":function onToggleSubMenu(e){this.setState(function(t){return{"list":t.list.map(function(t,n){return e===n?Object.assign({},t,{"isUnfold":!t.isUnfold}):t})}})}},{"key":"render","value":function render(){var e=this,t=this.state,n=t.desc,o=t.list;return u.default.createElement(l.View,{"className":"index"},u.default.createElement(l.View,{"className":"index__top"},u.default.createElement(l.Text,{"className":"index__top-text"},n)),u.default.createElement(l.View,{"className":"index__main"},o.map(function(t,n){return t.subList?u.default.createElement(l.View,{"className":"index__main-sub","key":n},u.default.createElement(l.Text,{"className":"index__main-sub-title","onClick":e.onToggleSubMenu.bind(e,n)},t.name),t.subList&&u.default.createElement(l.View,{"className":(0,c.default)("index__main-sub-list",{"index__main-sub-list--unfold":t.isUnfold})},t.subList.map(function(t){return u.default.createElement(s.AtListItem,{"title":t.name,"arrow":"right","key":t.name,"onClick":e.onGotoNetwork.bind(e,t.url)})}))):u.default.createElement(l.View,{"className":"index__main-sub","onClick":e.onGotoNetwork.bind(e,t.url),"key":n},u.default.createElement(l.Text,{"className":"index__main-sub-title"},t.name))})))}}]),Index}();t.default=d},"79":function(e,t,n){},"81":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.default={"name":"Taro API","desc":"这里展示的是 Taro 官方端能力，将演示基本 API 的调用方式及效果。","list":[{"name":"网络","url":"/pages/apis/network/index"},{"name":"媒体","url":"/pages/apis/media/index"},{"name":"数据缓存","url":"/pages/apis/storage/index"},{"name":"位置","url":"/pages/apis/location/index"},{"name":"设备","subList":[{"name":"系统信息","url":"/pages/apis/system/systemInfo/index"},{"name":"网络状态","url":"/pages/apis/system/networkType/index"}]},{"name":"界面","url":"/pages/apis/interface/index"}]}}}]);