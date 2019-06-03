<template>
	<div id="inputComponent">
		<!--input-->
		<!-- <input type="text" placeholder="input now" v-model="messages">
		<p>{{messages}}</p> -->
		<!--复选框-->
		<input type="checkbox" v-model="checked" id="test">
		<label for="test">{{checked}}</label>
		<!--多个复选框-->
		<input type="checkbox" v-model="checkedNames" id="a" value="A">
		<label for="a">a</label>
		<input type="checkbox" v-model="checkedNames" id="b" value="B">
		<label for="b">b</label>
		<input type="checkbox" v-model="checkedNames" id="c" value="C">
		<label for="c">c</label>
		<br>
		<span>checked name:{{checkedNames}}</span>

		<br>
		<!--单选框-->
		<input type="radio" v-model="singleName" id="sa" value="aa">
		<label for="sa">Sa</label>
		<input type="radio" v-model="singleName" id="sb" value="ab">
		<label for="sb">Sb</label>
		<br>
		<span>singleName:{{singleName}}</span>
		<br>
		<!--选择框-->
		<select v-model="selected">
			<option disabled>请选择</option>
			<option>A</option>
			<option>B</option>
			<option>C</option>
		</select>
		<span>选择的是:{{selected}}</span>

		<br>
		<!--修饰符
		1. .lazy 在change时触发，而非在input时触发
		2. .number 转化用户输入值为数值类型
		3. .trim 过滤用户首尾的空白字符
		-->
		<input type="text" v-model.lazy="messages">
		<input type="text" v-model.number="messages">
		<input type="text" v-model.trim="messages">
		<p>{{messages}}</p>
	</div>
</template>
<script>
	export default{
		name:'inputComponent',
		data:() => ({
			checked:'true',
			messages:'hello world!',
			checkedNames:[],
			singleName:'',
			selected:'',
		})
	}
</script>
<style></style>