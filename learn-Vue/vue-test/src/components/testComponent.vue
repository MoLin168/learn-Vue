<template>
	<div id="testComponent">
		<!--submit.prevent 	提交事件不再重载页面-->
		<form v-on:submit.prevent="addTodos">
	      <label for="new-todo">add a toto</label>
	      <input v-model="inputText" placeholder="input your new todo">
	      <button>add</button>
	    </form>
	    <button class="reClass" v-on:click="removeData">remove</button>
	    <ul>
	      <li  
	        v-for="(todo,index) in todos"
	        v-bind:key="todo.id"
	        v-bind:title="todo.text"
	      >{{todo.text}}</li>
	    </ul>
	    <br><br><br>
	    <button @click="printData()">props:{{dataFlag}}</button>
	    <p>{{allData}}</p>
	    <p>{{obj}}</p>
	</div>
</template>
<script>
	export default{
		name:'testComponent',
		props:['dataFlag','allData','obj'],
		data:() => ({
			inputText:'',
			todos:[
				{text:'aaa',id:1},
				{text:'bbb',id:2},
				{text:'ccc',id:3},
			],
			nextId:4,
			newarr:[]
		}),
		methods:{
			consoleP:function(){
				console.log(msg)
			},
			addTodos:function(){
				if(!this.inputText){return}
				this.todos.push({
					text:this.inputText,
					id:this.nextId++
				})
				this.inputText = ''
			},
			removeData:function(){
				if(this.todos.length == 0){return}
				this.todos.pop()
			},
			printData:function(){
				let _data = this.allData
				switch(typeof _data){
					case 'object':
						for(let key of Object.keys(_data)){
							// console.log('key='+key+",value="+_data[key])
							//等价于
							console.log(`key,${key}:value,${_data[key]}`)//反引号的使用
						}
						// for(let key in _data){//普通的循环
						// 	console.log('key='+key+",value="+_data[key])
						// }
						break
					case 'number':
					case 'boolean':
						console.log(_data)
						break
				}
			},
			changeParentCom:function(){
				this.$emit('nowTest','success changed message in testComponent')
			}
		},
		mounted(){
			this.changeParentCom()
		}
	}
</script>
<style scoped>
	.reClass{
		position: relative;
		left:180px;
		top:-21px;
	}
</style>