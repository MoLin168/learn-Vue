//开始测试学习Vuex 状态管理模式 2019317
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//设置全局需要访问的对象
const state = {
	showFooter:true,
	changeableNum:0
};

//实时监听state值的变化
const getters = {
	isShow:function(state){
		return state.showFooter;
	},
	getChangeNum:function(state){
		return state.changeableNum;
	}
};

//自定义修改state初始值的方法
const mutations = {
	changeFooter:function(state,val){
		state.showFooter = val;
	},
	changeValue:function(state,val){
		state.changeableNum = state.changeableNum + val;
	}
};

//自定义触发mutations里面的方法,context和store有相同的方法和属性
//针对actions,其他组件调用的方式是：this.$store.dispatch('getNewNum',7);
const actions = {
	setFooter:function(context,val){
		context.commit('changeFooter',val);
	},
	getNewNum:function(context,num){
		context.commit('changeValue',num);
	}

};
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});

export default store;