// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'

//测试vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)

//全部引入elementUI,现在是为了了解elementUI,所以不去按需引入，以后项目上需要则来按需引入，减少项目体积
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//现在已经安装了babel-plugin-component，可以按需引入组件，达到减小项目体积的目的:详见官网，现在是已经修改了.banelrc文件，有个old.babellrc是之前的备份文件
// import {Button,Select} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(Button)
// Vue.use(Select)

//提示框
import {
	Message
} from 'element-ui'


//字库
import 'font-awesome/css/font-awesome.css'

//Vuex
import store from './store'


Vue.config.productionTip = false
var baseUrl = 'http://slave.homed.me/'
axios.defaults.baseURL = baseUrl
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$message = Message
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
