<template>
	<div id="status-component">
		<input type="number" v-model.number="number" step="30">
		<p>{{tweenedNumber}}</p>
		<br><br>
		<!--过滤器测试-->
		<input type="text" v-model="msg" id="up"><label for="up">小写输入</label>
		<input type="text" v-model="msg2" id="low"><label for="low">大写输入</label>
		<p>{{msg | capitalize}}</p>
		<p>{{msg2 | capitalize2}}</p>
		<br>
		<!--下面这个注释掉的可以直接通过fn的方式来实现过滤器的效果-->
		<!-- <p>{{capitalize(msg)}}</p> -->
	</div>
</template>
<script>
	export default{
		name:'status-component',
		data:() => ({
			number:0,
			tweenedNumber:0,
			showData:'你好',
			msg:'',
			msg2:''
		}),
		watch:{
			number:function(newValue){
				console.log(this.$data)
				TweenLite.to(this.$data,1,{tweenedNumber:newValue})
			}
		},
		computed:{
			animatedNumber:function(){
				return this.tweenedNumber.toFixed(0)
			}
		},
		methods:{
			// capitalize:function(value){
			// 	if(!value){return}
			// 	value = value.toString()
			// 	return value.charAt(0).toUpperCase() + value.slice(1)
			// }
		},
		filters:{
			capitalize:function(value){//第一个字母大写，需要小写输入
				if(!value){return}
				value = value.toString()
				return value.charAt(0).toUpperCase() + value.slice(1)
			},
			capitalize2:function(value){//第一个字母小写，需要大写输入
				if(!value){return}
				value = value.toString()
				return value.toLowerCase()
				// return value.charAt(0).toLowerCase() + value.slice(1)
			}
		}
	}
</script>
<style scoped>
	
</style>