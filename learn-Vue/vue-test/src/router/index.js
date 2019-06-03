import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//manager vue componnet
import manager from '../manager.vue'
import Login from '../login.vue'
//test vue component
// import testComponent from '@/components/testComponent'
// import inputComponent from '@/components/inputComponent'

Vue.use(Router)

//组件的命名采用camelCased (驼峰式) 或者是 kebab-case（短横线命名）的方式；还有一种命名方式，只是为了了解叫：PascalCase(帕斯卡命名法) 每个单独单词的首字母均大写 如FirstName
//组件注册时一般分为全局注册和局部注册两种方式，下面的方式Vue.component(name,{template:})属于全局注册

//测试组件化,这种写法一般要通过router的方式封装成一个vue后缀文件，尽量做到页面组件化，目前测试，可以忽略
// Vue.component('button-counter', {//全局注册组件，在任何一个内部组件中都可以调用
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<div><button v-on:click="count++">You clicked me {{ count }} times.</button><p>{{ count }}</p></div>'
// })
// 继续测试该方式传递参数props
// Vue.component('custom-input', {
//   props: ['value'],
//   template: `
//     <input
//       v-bind:value="value"
//       v-on:input="$emit('input', $event.target.value)"
//     >
//   `
// })
//测试插槽分发内容
// Vue.component('alert-box',{
// 	template:`
// 	<div>
// 		<button type="submit">
// 			<slot></slot>
// 		</button>
// 	</div>
// 	`
// })


//添加$listeners属性：是一个对象，里面包含有作用在这个组件上的所有监听器
//反引号 `` 是es6中的模板字符串，其中${}代表是变量，不用使用之前的+来代表 比如：console.log(`key,${key}:value,${_data[key]}`)
// Vue.component('base-input',{
// 	inheritAtrrs:false,//非继承
// 	props:['label','value'],
// 	computed:{
// 		inputListeners:function(){
// 			let vm  = this
// 			//Object.assign 将所有的对象合并成一个新对象
// 			return Object.assign({},
// 				this.$listeners,//在父级添加所有的所有的监听器
// 				{
// 					//确保和v-model一起使用
// 					input:function(event){
// 						vm.$emit('input',event.target.value)
// 					}
// 				}
// 			)
// 		}
// 	},
// 	template:
// 	`
// 		<label>
// 			{{label}}
// 			<input 
// 				v-bind="$attrs" 
// 				v-bind:value="value"
// 				v-on="inputListeners"
// 			>
// 		</label>
// 	`
// })

export default new Router({//配置路由规则
  // mode:'history',//去除端口号后面的/#/
  routes: [
    {path:'/',redirect:'/login'},//重定向,即初始加载"/"在重定向页面刷新都到"/login"下面
    {//一个组件套用多个组件
  		path:'/login',
  		name:'login',
  		component:Login
  	},
    {
      path:'/manager',
      name:'manager',
      component:manager
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    // 	path:'/',
    // 	name:'testComponent',
    // 	component:testComponent
    // },
    // {
    // 	path:'/',
    // 	name:'inputComponent',
    // 	component:inputComponent
    // }
  ]
})
