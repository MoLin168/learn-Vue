<template>
	<div id="example">
		<el-container>
			<el-aside>
				<el-menu :default-openeds="['1','3']">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-share"></i>homed</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="1-1">api</el-menu-item>
							<el-menu-item index="1-2">message</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组二">
							<el-menu-item index="1-3">channel</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">js</template>
							<el-menu-item index="1-4-1">js-VueJS</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-setting"></i>VueJS</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="2-1">axios</el-menu-item>
							<el-menu-item index="2-2">resource</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组二">
							<el-menu-item index="2-3">elementUI</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">Vuex</template>
							<el-menu-item index="2-4-1">getters</el-menu-item>
							<el-menu-item index="2-4-2">state</el-menu-item>
							<el-menu-item index="2-4-3">mutations</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-menu"></i>导航三</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="3-1">npm</el-menu-item>
							<el-menu-item index="3-2">cnpm</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组三">
							<el-menu-item index="3-3">form</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="3-4">
							<template slot="title">icons</template>
							<el-menu-item index="3-4-1">home</el-menu-item>
							<el-menu-item index="3-4-2">set</el-menu-item>
							<el-menu-item index="3-4-3">car</el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<el-dropdown>
						<i class="el-icon-caret-bottom" style="margin-right: 15px;"></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item @click.native="showData">查看</el-dropdown-item>
							<el-dropdown-item @click.native="addData">新增</el-dropdown-item>
							<el-dropdown-item @click.native="deleteData">删除</el-dropdown-item>
							<el-dropdown-item @click.native="loginout">离开</el-dropdown-item>
							<el-dropdown-item @click.native="currChoose(tableData[2])">选中第三行</el-dropdown-item>
							<el-dropdown-item @click.native="currChoose()">取消选择行数</el-dropdown-item>
							<el-dropdown-item @click.native="toggleSelection([tableData[1],tableData[0]])">选中两个checkbox</el-dropdown-item>
							<el-dropdown-item @click.native="toggleSelection()">取消选中checkbox</el-dropdown-item>
						</el-dropdown-menu>
						<span>下拉框</span>
					</el-dropdown>
				</el-header>
				<el-main>
					<!--在@click中添加native修饰符：监听组件根元素的原生事件，给自定义的组件添加原生事件-->
					<!--
						stripe:创建带斑马纹的表格
						height:固定表头高度
						row-class-name：设置某一行的特定class属性
					-->
					<el-table
						ref="singleTable"
						:data="tableData"
						highlight-current-row
						@current-change="handleCurrentChange"
						@selection-change="handleSelectionChange"
						style="width: 100%"
						>
						<!--
							fixed width="150"  固定列
							type="selection" 创建复选框
							type="index" 创建索引值
						-->
						<el-table-column 
							type="index" 
							width="50">
						</el-table-column>
						<el-table-column 
							type="selection" 
							width="55">
						</el-table-column>
						<el-table-column 
							prop="date" 
							label="日期">
						</el-table-column>
						<el-table-column 
							prop="name" 
							label="姓名" >
						</el-table-column>
						<el-table-column 
							prop="gender" 
							label="性别">
						</el-table-column>
						<el-table-column 
							prop="favorite" 
							label="爱好">
						</el-table-column>
						<el-table-column 
							prop="address" 
							label="地址">
						</el-table-column>
						<el-table-column 
							prop="age" 
							label="年龄">
						</el-table-column>
						<el-table-column 
							prop="type" 
							label="行业">
						</el-table-column>
						<el-table-column 
							prop="technology" 
							label="技术">
						</el-table-column>
					</el-table>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import CONFIG from '../../common/js/config.js'
	export default{
		name:'example',
		data:function(){
			const item = {
				date:'2019-03-25',
				name:'xxxxx',
				gender:'man',
				favorite:'running&sport',
				address:'上海市江路啊打发',
				age:0,
				type:'IT',
				technology:'Vue'
			};
			const makeTableData = function(){
				let arr = [];
				let newItem = Array(5).fill(item);
				//这种思想可能不对
				// for(let i in newItem){
				// 	((i)=>{
				// 		newItem[i].age = i;
				// 		console.log(JSON.stringify(newItem[i]));
				// 		arr.push(newItem[i]);
				// 	})(i);
				// }
				// console.log(JSON.stringify(arr));
				// return arr;

				//el代表的是当前元素，indx代表当前元素的索引，arr代表当前元素属于的数组对象
				newItem = newItem.map((el,idx,arr)=>{//map返回一个新数组，原数组不变
					//console.log("el="+JSON.stringify(el))
					el.age = (idx+1);//修改item对象中的age属性
					return Object.assign({},el);//Object.assign({},item)潜复制对象
				});
				return newItem;
			};
			return{
				// tableData:Array(10).fill(item),//添加20条item到数组里面，并且返回给tableDate变量 这个tableData全是相同的数组对象
				tableData:makeTableData(),//做一个处理，修改为不同的对象数组，原因是测试复选框和单向行，否则任意选择一个就全部选中了
				item:item,
				multipleSelection:[],
				currentRow:null
			}
		},
		methods:{
			tableRowClassName:function({row,rowIndex}){//:row-class-name="tableRowClassName" 需要在el-table上进行绑定该class属性
				if(rowIndex === 1){
					return 'warning-row';
				}else if(rowIndex === 3){
					return 'success-row';
				}
				return '';
			},
			addData:function(){
				this.tableData.push(this.item);
			},
			deleteData:function(){
				this.tableData.splice(0,1);
			},
			showData:function(){
				console.log(this.tableData);
			},
			loginout:function(){
				CONFIG.Cookie.deleteCookie('token');
				this.$router.push({path:'/login'});
			},
			currChoose:function(row){
				this.$refs.singleTable.setCurrentRow(row);
			},
			handleSelectionChange:function(val){
				this.singleTable = val;
			},
			handleCurrentChange:function(val){
				this.currentRow = val;
			},
			toggleSelection:function(rows){
		       if (rows) {
					rows.forEach(row => {
						this.$refs.singleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.singleTable.clearSelection();
				}
			}
		}
	}
</script>
<style>
	.el-aside{
		width:200px;
		color:#333;
	}
	.el-header{
		font-size: 12px;
		text-align: right;
		color:#333;
		line-height: 60px;
		background-color:#B3C0D1;
	}
	.el-table .warning-row{
		background:oldlace;
	}
	.el-table .success-row{
		background:#f0f9eb;
	}
	/*.el-main{//测试固定列
		width:40%;
	}*/
	.el-dropdown-menu{/*居中右上角下拉框文字*/
		text-align:center;
	}
</style>