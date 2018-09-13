(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"68":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(7),o=_interopRequireDefault(a),u=_interopRequireDefault(r(0)),i=r(13),l=r(74),s=_interopRequireDefault(r(75));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(84);var c=function(e){function Storage(){var e,t,r;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Storage);for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=r=_possibleConstructorReturn(this,(e=Storage.__proto__||Object.getPrototypeOf(Storage)).call.apply(e,[this].concat(a))),r.state={"storageKey":"","storageValue":"","btnList":[{"name":"存储数据","style":"primary","type":"setStorage"},{"name":"读取数据","style":"primary","type":"getStorage"},{"name":"移除指定数据","style":"secondary","type":"removeStorage"},{"name":"清理数据","style":"secondary","type":"clearStorage"}]},r.config={"navigationBarTitleText":"数据缓存"},_possibleConstructorReturn(r,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Storage,a.Component),n(Storage,[{"key":"handleInput","value":function handleInput(e,t){"key"===e?this.setState({"storageKey":t}):"value"===e&&this.setState({"storageValue":t})}},{"key":"handleStorage","value":function(){var e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function step(n,a){try{var o=t[n](a),u=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}("next")})}}(regeneratorRuntime.mark(function _callee(e){var t,r,n,a,u,i,l;return regeneratorRuntime.wrap(function _callee$(s){for(;;)switch(s.prev=s.next){case 0:t=this.state,r=t.storageKey,n=t.storageValue,a="",u="",s.t0=e,s.next="setStorage"===s.t0?6:"getStorage"===s.t0?13:"removeStorage"===s.t0?30:"clearStorage"===s.t0?37:41;break;case 6:if(r&&n){s.next=9;break}return a="保存数据失败",u=(r?n?"":"value":"key")+" 不能为空",s.abrupt("break",42);case 9:return s.next=11,o.default.setStorage({"key":r,"data":n});case 11:return u="储存数据成功",s.abrupt("break",42);case 13:if(r){s.next=17;break}return a="读取数据失败",u="key 不能为空",s.abrupt("break",42);case 17:return s.prev=17,s.next=20,o.default.getStorage({"key":r});case 20:i=s.sent,a="读取数据成功",u="data: '"+i.data+"'",s.next=29;break;case 25:s.prev=25,s.t1=s.catch(17),a="读取数据失败",u="找不到 key 对应的数据";case 29:return s.abrupt("break",42);case 30:if(r){s.next=33;break}return a="移除指定数据失败",u="key 不能为空",s.abrupt("break",42);case 33:return s.next=35,o.default.removeStorage({"key":r});case 35:return u="移除指定数据成功",s.abrupt("break",42);case 37:return s.next=39,o.default.clearStorage();case 39:return u="清理数据成功",s.abrupt("break",42);case 41:a="type不存在";case 42:l={"showCancel":!1},a&&(l.title=a),u&&(l.content=u),o.default.showModal(l);case 46:case"end":return s.stop()}},_callee,this,[[17,25]])}));return function handleStorage(t){return e.apply(this,arguments)}}()},{"key":"render","value":function render(){var e=this,t=this.state,r=t.storageKey,n=t.storageValue,a=t.btnList;return u.default.createElement(i.View,{"className":"storage"},u.default.createElement(s.default,{"title":"get/set/clearStorage"}),u.default.createElement(l.AtForm,null,u.default.createElement(l.AtInput,{"clear":!0,"name":"key","title":"key","placeholder":"请输入 key","value":r,"onChange":this.handleInput.bind(this,"key")}),u.default.createElement(l.AtInput,{"clear":!0,"name":"value","title":"value","border":!1,"placeholder":"请输入 value","value":n,"onChange":this.handleInput.bind(this,"value")})),u.default.createElement(i.View,{"className":"storage__btns"},a.map(function(t,r){return u.default.createElement(i.View,{"className":"storage__btn","key":r},u.default.createElement(l.AtButton,{"type":t.style,"onClick":e.handleStorage.bind(e,t.type)},t.name))})))}}]),Storage}();t.default=c},"75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(7),o=(_interopRequireDefault(a),_interopRequireDefault(r(0))),u=r(13);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(76);var i=function(e){function Header(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,a.Component),n(Header,[{"key":"render","value":function render(){return o.default.createElement(u.View,{"className":"header"},o.default.createElement(u.Text,{"className":"title"},this.props.title))}}]),Header}();t.default=i},"76":function(e,t,r){},"84":function(e,t,r){}}]);