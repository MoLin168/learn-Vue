<template>
	<div id="vuexTest">
		<el-button @click="testGetters">statu:测试状态</el-button>
		<el-button @click="testGetters2">statu:测试数值</el-button>
		<el-button @click="showMutaionCollect(vuexData)">collection:测试</el-button>
		<!-- <ul>
			<li
				v-for="item in collectObj"
				v-bind:key="collectObj.id"
			>{{item}}</li>
		</ul> -->
	</div>
</template>
<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default{
		name:'vuexTest',
		data:() =>({
			vuexData:{
				id:'20190321',
				name:'Vuex test',
				time:'19:16'
			}
		}),
		methods:{
			testGetters:function(){
				this.$message({
					message:`getters 状态值输入提示:${this.isFlag}`,
					type:'success',
					center:true,
					showClose:true
				});
			},
			testGetters2:function(){
				confirm(`数值输出打印：${this.newNum}`);
			},
			...mapActions('collection',[
					'showMutaionCollect'
				])
		},
		computed:{
			//...es6里面的扩展运算符
			...mapState({
				isFlag:state => state.footerStatus.showFooter
			}),
			//isFlag是当前组件中未去命名的变量，主要去控制一些状态，显隐等
			//isShow是状态管理模式中的指定文件footerStatus.js中的getters下面的isShow方法
			//等价于上面的方法
			...mapGetters('footerStatus',{
				isFlag:'isShow'
			}),
			...mapGetters('footerStatus',{
				newNum:'getChangeNum'
			})
			// ...mapGetters('collection',{
			// 	collectObj:'renderCollect'
			// })
		},
		mounted(){
			this.$store.dispatch('footerStatus/getNewNum',13123);
		}
	}
</script>