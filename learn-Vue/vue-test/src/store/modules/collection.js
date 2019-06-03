
const state = {
	collects:[]
};

const getters = {
	renderCollect:function(state){
		return state.collects;
	}
};

const mutations = {
	pushCollect:function(state,items){
	 	state.collects.push(items);
	}
};

const actions = {
	showMutaionCollect:function(context,items){
		context.commit('pushCollect',items);
	}
};

export default{
	namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名，主要为了避免相同的方法和变量
	state,
	getters,
	mutations,
	actions
}
