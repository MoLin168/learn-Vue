<template>
	<div id="axiosTest">
		<!-- <p>{{msg}}</p> -->
		<ul>
			<li
				v-for="item in msg"
				v-bind:key="item.id"
				class="liClass"
			>
				{{item.name}}
			</li>
		</ul>
		<p>{{weather}}</p>
	</div>
</template>
<script>
/*
目前来看 Vue axios post和get的区别在于传参形式不同:
	get:1.{params},并且params为对象;
		2.get写法;
	post:1.params,并且params为JSON字符串;
		2.post写法;

	在使用post时看网上有些别的方式，所以先尝试下，安装了下qs  cnpm install qs
	栗子：
	let data = {'name':'haha',age:12};
	qs.stringify(data)序列化之后变成 name=haha&age=12 
	JSON.stringify(data)序列化之后变成 "{"name":"haha","age":12}"
 */
	export default{
		name:'axiosTest',
		data:() => ({
			msg:null,
			weather:null
		}),
		methods:{
			getAllData:function(){
				let url = 'homed/programtype/get_list';
				let params = {
					vcontrol:1,
					depth:2,
					label:0,
					accesstoken:'TOKEN50002964'
				};
				this.$axios.get(url,{
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
				let url = 'application/weather/get_weather_forecast';
				let params = {
					accesstoken:'TOKEN50001002',
					code:['440303'],
					type:['1']
				};
				params = JSON.stringify(params);
				// params = this.$qs.stringify(params);
				this.$axios.post(url,
					params
				).then(({data}) => {
					if(data.ret === 0){
						this.weather = data;
					}else{
						console(`ret fail : ${data.ret}`);
					}
				}).catch(err => {
					console.log(err);
				});
			}
		},
		mounted(){
			this.getAllData();
			this.postAllData();
		}
	}
</script>
<style scoped>
	.liClass{
		list-style-type: none;
	}
</style>