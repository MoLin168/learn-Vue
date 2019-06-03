<template>
	<div id="tableComponent">
		<el-table
			ref="singleTable"
			:data="tableData"
			border
			tooltip-effect="dark"
			style="width: 40%"
			highlight-current-row
			@current-change="handleCurrentChange"
			@selection-change="handleSelectionChange"
			:default-sort="{prop:'date',order:'descending'}">
		<el-table-column
			type="selection"
			width="55">
		</el-table-column>
		<el-table-column
			prop="date"
			label="日期"
			width="120"
			sortable
			column-key="date"
			:filters="dateFiltersConditions"
			:filter-method="filterHandler">
			<template slot-scope="scope">{{ scope.row.date }}</template>
		</el-table-column>
		<el-table-column
			prop="name"
			label="姓名"
			width="120">
		</el-table-column>
		<el-table-column
			prop="address"
			label="地址"
			:formatter="formatter"
			show-overflow-tooltip>
		</el-table-column>
		<el-table-column 
			prop="age"
			label="年龄"
			sortable>
		</el-table-column>
		<el-table-column 
			prop="gender"
			label="性别"
			:filters="genderFiltersConditions"
			:filter-method="filterGender"
			filter-placement="bottom-end"
			show-overflow-tooltip>
		<template slot-scope="scope">
			<el-tag
				:type="scope.row.gender === 'woman' ? 'success' : 'primary'"
				disable-transitions>
				{{scope.row.gender}}
				</el-tag>
		</template>
		</el-table-column>
		</el-table>
		<el-button @click="currChoose(tableData[2])" type="primary">单选当前行</el-button>
		<el-button @click="currChoose()" type="primary">取消行选择</el-button>
		<el-button @click="toggleSelection([tableData[1],tableData[2]])" type="primary">选择复选框</el-button>
		<el-button @click="toggleSelection()" type="primary">取消复选框选择</el-button>
		<el-button @click="resetDateFilter" type="primary">清除日期过滤器</el-button>
		<el-button @click="clearFilter" type="primary">清除所有过滤器</el-button>
		<el-button @click="eventMapping(true)" type="success">添加事件</el-button>
		<el-button @click="eventMapping(false)" type="warning">清除事件</el-button>
	</div>
</template>
<script>
	export default{
		name:'tableComponent',
		data(){
			return{
				tableData: [{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          age:10,
		          gender:'man'
		        }, {
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          age:1,
		          gender:'woman'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          age:12,
		          gender:'man'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          age:10,
		          gender:'man'
		        }, {
		          date: '2016-05-08',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          age:11,
		          gender:'woman'
		        }, {
		          date: '2016-05-06',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          age:18,
		          gender:'man'
		        }, {
		          date: '2016-05-07',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          age:20,
		          gender:'woman'
		        }],
       			multipleSelection:[],
				currentRow:null,
				dateFiltersConditions:[
					{text:'2016-05-01',value:'2016-05-01'},
					{text:'2016-05-02',value:'2016-05-02'},
					{text:'2016-05-03',value:'2016-05-03'},
					{text:'2016-05-04',value:'2016-05-04'},
					{text:'2016-05-05',value:'2016-05-05'},
					{text:'2016-05-06',value:'2016-05-06'},
					{text:'2016-05-07',value:'2016-05-07'},
					{text:'2016-05-08',value:'2016-05-08'}
				],
				genderFiltersConditions:[
					{text:'woman',value:'woman'},
					{text:'man',value:'man'},
				]
			}
		},
		methods:{
			currChoose:function(row){
				this.$refs.singleTable.setCurrentRow(row);
			},
			handleCurrentChange:function(val){
				this.currentRow = val;
			},
			handleSelectionChange:function(val){
				this.multipleSelection = val;
			},
			toggleSelection:function(rows){
		       if (rows) {
					rows.forEach(row => {
						this.$refs.singleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.singleTable.clearSelection();
				}
			},
			formatter:function(row,column){//格式化当前指定列的数值
				return row.address.substring(0,7);
			},
			filterHandler:function(value,row,column){
				const property = column['property'];
				return row[property] === value;
			},
			filterGender:function(value,row){
				return row.gender === value;
			},
			resetDateFilter:function(){
				this.$refs.singleTable.clearFilter('date');
			},
			clearFilter:function(){
				this.$refs.singleTable.clearFilter();
			},
			addListener(){
				document.addEventListener('keydown',this.eventHandler);
				document.addEventListener('systemevent',this.eventHandler);
			},
			removeListener(){
				document.removeEventListener('keydown',this.eventHandler);
				document.removeEventListener('systemevent',this.eventHandler);
			},
			eventHandler(event){
				let eventCode = event.keyCode || event.which;
				console.log(`eventCode,${eventCode}`);
				switch(eventCode){
					case 37:
						break;
					case 38:
						break;
					case 39:
						break;
					case 40:
						break;
					case 13:
						break;
					default:
						return false;
						break;
				}
			},
			eventMapping(val){
				if(val){
					this.addListener();
				}else{
					this.removeListener();
				}
			}
		},
		watch:{
		},
		mounted(){
			this.addListener();
		}
	}
</script>
<style>
	.el-table{
		margin-left:1%;
		margin-top: 60px;
	}
	.el-button{
		margin-top:20px;
		margin-left:-500px;
	}
</style>