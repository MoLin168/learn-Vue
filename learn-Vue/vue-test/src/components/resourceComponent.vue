<template>
	<div id="resource">
		<!-- <ul>
			<li
				v-for="item in msg"
				:key="item.id"
				class="liClass"
			>
				{{item.name}}
			</li>
		</ul>
		<p>{{weather}}</p>
		<el-button @click="testVuex">testVuex</el-button>
		<el-button @click="testVuex2">testVuex2</el-button> -->
		<ul>
			<li
				v-for="item in collectobj"
				v-bind:key="item.id"
			>{{item}}</li>
		</ul>

	</div>
</template>
<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default{
		name:'resource',
		data:() =>({
			msg:null,
			weather:null,
		}),
		methods:{
			getAllData:function(){
				let url = 'http://slave.homed.me/homed/programtype/get_list';
				let params = {
					vcontrol:1,
					depth:2,
					label:0,
					accesstoken:'TOKEN50002964'
				};
				this.$http.get(url,{
					params
				}).then(({data}) => {//http请求成功
					if(data.ret === 0){//ret状态值成功
						this.msg = data.type_list[0].children;
						console.log(`反引号打印输出:${this.msg}`);
						// console.log(`反引号打印输出:
						// 	${this.msg}`);
					}else{
						console.log('ret='+data.ret);
					}
				}).catch(err => {//http请求失败
					console.log(err);
				});
			},
			postAllData:function(){
				let url = 'http://slave.homed.me/application/weather/get_weather_forecast';
				let params = {
					accesstoken:'TOKEN50001002',
					code:['440303'],
					type:['1']
				};
				params = JSON.stringify(params);
				this.$http.post(url,
					params,{
						headers:{'Content-Type':'application/x-www-form-urlencoded'}
						// emulateJSON:true
					}
				).then(({data}) => {
					if(data.ret === 0){
						this.weather = data;
						//测试下Vuex
						// console.log(`getters.getChangeNum:${this.$store.getters.getChangeNum}`);
						// this.$store.dispatch('getNewNum',10);
						// console.log(` test Vuex 修改全局状态: ${this.$store.getters.getChangeNum}`);
						// this.$store.commit('pushCollect','a');
						// console.log(`test Vuex 修改全局状态:${this.$store.getters.renderCollect}`	);
					}else{
						console(`ret fail : ${data.ret}`);
					}
				}).catch(err => {
					console.log(err);
				});
			},
			testVuex:function(){
				this.$message({
					message:`isFlag=${this.isFlag}`,
					type:'success',
					center:true,
					showClose:true
				});
			},
			testVuex2:function(){
				alert(`newNum:${this.newNum}`);
			}
		},
		computed:{
			// ...mapState({
			// 	isFlag:state => state.footerStatus.showFooter
			// }),
			//isFlag是当前组件中未去命名的变量，主要去控制一些状态，显隐等
			//isShow是状态管理模式中的指定文件footerStatus.js中的getters下面的isShow方法
			...mapGetters('footerStatus',{
				isFlag:'isShow'
			}),
			...mapGetters('footerStatus',{
				newNum:'getChangeNum'
			}),
			...mapGetters('collection',{
				collectobj:'renderCollect'
			})
		},
		mounted(){
			this.$store.dispatch('footerStatus/getNewNum',111);
			this.$store.dispatch('collection/showMutaionCollect',{id:'12',name:'手动加数据'});
			this.getAllData();
			this.postAllData();
		}
	}
</script>
<style scoped>
	.liClass{
		list-style-type:none;
	}
</style>