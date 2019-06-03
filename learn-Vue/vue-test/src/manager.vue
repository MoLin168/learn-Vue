<template>
	<div id="appMana">
		<!--自定义组件的名称-->
		<!-- <hello-world></hello-world> -->
		<!-- <test-component :dataFlag="dataFlag" :allData="allData" :obj="object" v-on:nowTest="showMassge"></test-component> -->
		<slot-component>
			<!--具名插槽测试-->
			<!-- <template v-slot:header>
				<p>here maybe a title</p>
			</template>
			<template v-slot:default>
				<p>here maybe a content</p>
			</template>
			<template v-slot:footer>
				<p>here maybe some contact info</p>
			</template> -->
			<!--插槽prop-->
			<!-- <template v-slot:default="slotProps">
				{{slotProps.user}}
			</template> -->
			<!--简写插槽prop 默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确-->
			<template v-slot="slotProp">
				{{slotProp.user}}
			</template>

			<!--具名插槽简写测试 v-slot: => # -->
			<!-- <template #header>
				<p>here maybe a # title</p>
			</template> -->
		</slot-component>
		<!-- <slot-component> -->
			<!--放在一个元素上面-->	
			<!-- <h1 slot="header">here is a element slot</h1> -->
		<!-- </slot-component> -->
		<!--注意当点击按钮时，每个组件都会各自独立维护它的 count。因为你每用一次组件，就会有一个它的新实例被创建-->
		<!-- <button-counter></button-counter>
		<button-counter></button-counter> -->
		<!-- <custom-input v-model="searchText"></custom-input> -->
		<!-- <alert-box>Something bad happened.</alert-box> -->
		<!--$listeners属性测试-->
		<!-- <base-input></base-input> -->
		<!--.sync使用-->
		<!-- <base-input v-bind.sync="doc"></base-input> -->

		<!--异步组件：使部分组件延迟加载，使程序初始包更新，首次刷新的更快-->
		<!--条件异步组件-->
		<!-- <button @click="show = true"> load async</button>
		<p>{{show}}</p>
		<div v-if = "show">
			<async-component/>
		</div> -->
		
		<!--动画过渡 transition-->
		<!-- <transition-component /> -->
		
		<!--js钩子函数-->
		<!-- <jsHook-component /> -->

		<!--状态过渡-->
		<!-- <status-component /> -->
		
		<!--axios测试-->
		<!-- <axios-component /> -->

		<!--vue-resource测试 在Vue2.0之后就不再更新它了，现在普遍用的是axios-->
		<!-- <resource-component /> -->

		<!--elementUI测试-->
		<!-- <formUI-component /> -->
		<!--模拟一个login框-->
		<!-- <loginAndRegister-component /> -->
		<!-- <container-component /> -->
		<!-- <containerExample-component /> -->
		<!--event 事件处理-->
		<!-- <table-component /> -->
		<!-- <customizeTable-component/> -->
		
		<!--预处理less scss stylus-->
		<!-- <expandTable-component /> -->
		<!--Vuex 测试-->
		<!-- <vuex-component /> -->
	</div>
</template>
<script>
	import CONFIG from './common/js/config.js'
	import helloWorld from './components/HelloWorld.vue'
	import testComponent from './components/testComponent.vue'
	import slotComponent from './components/slotComponent.vue'
	import transitionComponent from './components/transition.vue'
	import jsHookComponent from './components/jsHook.vue'
	import statusComponent from './components/statusComponent.vue'
	import axiosComponent from './components/axiosComponent.vue'
	import formUIComponent from './components/elementUI/formComponent.vue'
	import loginAndRegister from './components/elementUI/loginAndRegister.vue'
	import resourceComponent from './components/resourceComponent.vue'
	import vuexComponent from './components/vuexComponent'
	import containerComponent from './components/elementUI/containerComponent'
	import containerExample from './components/elementUI/containerExample'
	import tableComponent from './components/elementUI/tableComponent'
	import customizeTableComponent from './components/elementUI/customizeTableComponent'
	import expandTableComponent from './components/elementUI/expandTableComponent'
	export default{
		name:'appMana',
		data:() => ({
			show:false,
			dataFlag:true,
			allData:[1,2,32,3,4],
			object:{a:'d',ss:'sda'},
			massage:'hello World'
		}),
		created(){
			// let accesstoken = CONFIG.Cookie.getCookie('token');
			// if(!accesstoken){//做一个登录判断
			// 	this.$router.push({path:'/login'});
			// }
			console.log('manager created')
		},
		methods:{
			change:function(){
				console.log("count="+this.count)
			},
			showMassge:function(_msg){
				this.massage = _msg ? _msg : this.massage
				console.log("meaasge="+this.massage)
			}
		},
		components:{
			'hello-world':helloWorld,
			'test-component':testComponent,
			'slot-component':slotComponent,
			'async-component':() => import('./components/async.vue'),//异步加载组件
			'transition-component':transitionComponent,
			'jsHook-component':jsHookComponent,
			'status-component':statusComponent,
			'axios-component':axiosComponent,
			'formUI-component':formUIComponent,
			'loginAndRegister-component':loginAndRegister,
			'resource-component':resourceComponent,
			'vuex-component':vuexComponent,
			'container-component':containerComponent,
			'containerExample-component':containerExample,
			'table-component':tableComponent,
			'customizeTable-component':customizeTableComponent,
			'expandTable-component':expandTableComponent
		},
		mounted(){
			console.log('manager mounted')
			this.change()
		}
	}
</script>
<style>
	
</style>