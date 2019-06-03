<template>
	<div id="testSlot">
		<!--test 具名插槽-->
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
		
		<br><br>
	
		<!--作用域插槽，插槽prop，从2.60开始废除slot-scope-->
		<span>
			<slot v-bind:user="user.firstName">
				{{user.lastName}}
			</slot>
		</span>
	</div>
</template>
<script>
	export default{
		name:'testSlot',
		data:() => ({
			user:{firstName:'lili',lastName:'nana'}
		}),
		methods:{

		},
		computed:{

		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style>
	
</style>