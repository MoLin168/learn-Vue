<template>
	<div id="customizeTable">
		<el-table
			:data="tableData"
			style="width:100%"
			border
			:default-sort="{prop:'date',order:'descending'}">
			<el-table-column 
				type="index">
			</el-table-column>
			<el-table-column
				label="日期"
				width="180"
				prop="date"
				sortable
				>
				<template slot-scope="scope">
					<i class="el-icon-time"></i>
					<span style="margin-left:10px;">{{scope.row.date}}</span>
				</template>
			</el-table-column>
			<el-table-column 
				label="姓名"
				width="180">
				<!--只显示名字-->
				<!-- <template slot-scope="scope">
					<i class="el-icon-setting"></i>
					<span style="margin-left:10px;">{{scope.row.name}}</span>
				</template> -->
				<template slot-scope="scope">
					<el-popover
						trigger="hover" placement="top">
						<p>姓名：{{scope.row.name}}</p>
						<p>地址：{{scope.row.address}}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{scope.row.name}}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button
						size="mini"
						type="primary"
						@click="handleEdit(scope.$index,scope.row)">编辑
						</el-button>
					<el-button
						size="mini"
						type="danger"
						@click="handleDelete(scope.$index,scope.row)">删除
					</el-button>
					<el-button
						size="mini"
						type="warning"
						@click="handleAdd(scope.$index,scope.row)">增加
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		name:'custimizeTable',
		data:()=>({
			tableData: [{
	          date: '2016-05-02',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-03',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1516 弄'
	        }],
	        addData:{
	        	date: '2016-05-00',
	         	 name: '王小虎add',
	          	address: '上海市普陀区金沙江路 8888 弄'}
		}),
		methods:{
			handleEdit:function(index,row){
				console.log(`index:${index},row:${row}`);
			},
			handleDelete:function(index,row){//删除当前行
				this.tableData.splice(index,1);
			},
			handleAdd:function(index,row){//从index前一行进行插入
				this.tableData.splice(index,0,this.addData);
			}
		}
	}
</script>
<style>
	
</style>