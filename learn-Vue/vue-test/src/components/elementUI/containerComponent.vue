<template>
	<div id="containerDvi">
		<el-container class="external">
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-container>
					<el-main>Main</el-main>
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	export default{
		name:'containerDiv',
		// data:()=>({

		// })
		data:function(){
			return{

			}
		}
	}
</script>
<style scoped>
	.el-header,.el-footer{
		background-color:#B3C0D1;
		color:#333;
		text-align:center;
		line-height:60px;
	}
	.el-aside{
		background-color:#D3DCE6;
		color:#333;
		text-align:center;
		line-height: 200px;
	}
	.el-main{
		background-color:#E9EEF3;
		color:#333;
		text-align:center;
		line-height:160px;
	}
	/*.external{
		border:1px solid red;
	}*/
	#containerDvi > .el-container{
		border:1px solid red;
	}
</style>