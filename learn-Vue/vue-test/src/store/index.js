//开始测试学习Vuex 状态管理模式 2019317
//开始使用modules来分模块管理状态全局值
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import footerStatus from './modules/footerStatus'
import collection from './modules/collection'

const store = new Vuex.Store({
	modules:{
		footerStatus,
		collection
	}
});

export default store;