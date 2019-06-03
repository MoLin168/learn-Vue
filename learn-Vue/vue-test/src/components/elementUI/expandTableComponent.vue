<template>
	<div id="expandTable">
		<el-table
			:data="tableData"
			width="100%"
			:default-sort="{prop:'id',order:'descending'}"
			border
			><!--:span-method="objectSpanMethod"  合并行或列  //arraySpanMethod-->
			<el-table-column type="index"></el-table-column>
			<el-table-column type="selection"></el-table-column>
			<el-table-column
				type="expand">
				<template slot-scope="scope">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="商品名称" class="special">
							<span>{{scope.row.name}}</span>
						</el-form-item>
						<el-form-item label="所属店铺">
							<span>{{scope.row.shop}}</span>
						</el-form-item>
						<el-form-item label="商品 ID">
							<span>{{scope.row.id}}</span>
						</el-form-item>
						<el-form-item label="店铺 ID">
							<span>{{scope.row.shopId}}</span>
						</el-form-item>
						<el-form-item label="商品分类">
							<span>{{scope.row.category}}</span>
						</el-form-item>
						<el-form-item label="店铺地址">
							<span>{{scope.row.address}}</span>
						</el-form-item>
						<el-form-item label="商品描述">
							<span>{{scope.row.desc}}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column
				label="商品 ID"
				prop="id"
				sortable>
			</el-table-column>
			<el-table-column
				label="商品名称"
				prop="name">
			</el-table-column>
			<el-table-column
				label="描述"
				prop="desc">
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
		<!--垂直居中-->
		<div class="testScss">测试scss</div>
		<div class="testLess" style="display: none;">测试less</div>
	</div>
</template>
<script>
	export default{
		name:'expandTable',
		data:()=>({
			tableData: [{
				id: '12987122',
				name: '好滋好味鸡蛋仔',
				category: '江浙小吃、小吃零食',
				desc: '荷兰优质淡奶，奶香浓而不腻',
				address: '上海市普陀区真北路',
				shop: '王小虎夫妻店',
				shopId: '10333'
	        }, {
				id: '12987123',
				name: '好滋好味鸡蛋仔',
				category: '江浙小吃、小吃零食',
				desc: '荷兰优质淡奶，奶香浓而不腻',
				address: '上海市普陀区真北路',
				shop: '王小虎夫妻店',
				shopId: '10333'
	        }, {
				id: '12987125',
				name: '好滋好味鸡蛋仔',
				category: '江浙小吃、小吃零食',
				desc: '荷兰优质淡奶，奶香浓而不腻',
				address: '上海市普陀区真北路',
				shop: '王小虎夫妻店',
				shopId: '10333'
	        }, {
				id: '12987126',
				name: '好滋好味鸡蛋仔',
				category: '江浙小吃、小吃零食',
				desc: '荷兰优质淡奶，奶香浓而不腻',
				address: '上海市普陀区真北路',
				shop: '王小虎夫妻店',
				shopId: '10333'
        }],
        addData:{
        	id: '1298712000-add',
			name: '好滋好味鸡蛋仔-add',
			category: '江浙小吃、小吃零食-add',
			desc: '荷兰优质淡奶，奶香浓而不腻-add',
			address: '上海市普陀区真北路-add',
			shop: '王小虎夫妻店-add',
			shopId: '10333-add'
        }
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
			},
			arraySpanMethod:function({row,column,rowIndex,columnIndex}){
				if(rowIndex % 2 === 0){
					return [1,2];
				}else if(columnIndex === 1){
					return [0,0];
				}
			},
			objectSpanMethod:function({row,column,rowIndex,columnIndex}){
				if(columnIndex === 0){
					if(rowIndex % 2 === 0){
						return{
							rowspan:2,
							colspan:1
						};
					}
				}else{
					return {
						rowspan:0,
						colspan:0
					};
				}
			}
		}
	}
</script>
<!--在单个组件中这样使用感觉有些多余，除非是高频率使用这些色值和大小，才去使用这种变量的方式，就可以达到预加载的方便和代码的简洁性-->
<!--
	如果使用scss，同理需要先安装scss和scss-loader ，然后在style内联样式中设置lang="scss",使用$代替@；
	scss和less比较大的一个区别：(在2014年8月份发布的sass 3.4.0（简称scss）中已经改良局部变量影响全局变量的问题了，所以该区别只能是在该版本之前才存在这个说法)
	scss获取$开头的变量时，是全局获取的，而且后定义的(局部变量)会覆盖前面定义的全局变量，这样容易混淆出问题 ，而less则不会。
-->
<!-- <style lang="less">
	@width:90px;
	@color:#99a9bf;
	@size:0;
	@radius:10px;
	@num:50%;
	.common-css{
		position: relative;
		left:@num;
		top:@num;
		width:200px;
		height: 100px;
		font-size: 26px;
		color:#fff;
		margin-left:-100px;
		margin-top:-50px;
		text-align:center;
		line-height: 100px;
	}
	.lessTest{
		background: @color;
		border-radius: @radius;
	}
	.border(@a:10px,@b:50px,@c:30px,@d:yellow){
		border:1px solid @d;
		//box-shadow: @arguments;
	}
	.card{
		background: lighten(#723232,30%);//增加一定数值的颜色亮度
		.d(@w:320px){
			width:@w;

			#a(@h:300px,@wi:300px){
				height:@h;
				width:@wi;
				line-height: @h;
			}
		}
	}
	.whenClass{
		.border(@wid,@sty,@col) when(@wid > 0px) and(@col = blue){// and 运算符 ，相当于 与运算 &&，必须条件全部符合才会执行
			border:@wid @sty @col;
		}

		.background(@curColor) when not (@curColor>=#222){// not 运算符，相当于 非运算 !，条件为 不符合才会执行
			background: @curColor;
		}

		.font(@size:28px) when (@size>50px) , (@size<80px){//, 逗号分隔符：相当于 或运算 ||，只要有一个符合条件就会执行
			font-size: @size;
		}
	}
	.demo-table-expand{
		font-size:0px;
		label{
			@color:red;
			width:@width;
			color:@color;/*red*/
		}
	}
	.special{
		color:@color;/*#99a9bf*/
	}
	.demo-table-expand .el-form-item{
		margin-left:@size;
		margin-bottom:@size;
		width:50%;
	}
	.testLess{
		.common-css;/*初始化div样式*/
		/*.lessTest;*/
		&:extend(.lessTest);
		.border;
		.card > .d > #a(300px,200px);
		.whenClass > .border(1px,solid,blue);
		.whenClass > .background(#010);
		.whenClass.font;
		.card;
	}
</style> -->
<!--
	less:
	less的变量和嵌套和scss有些雷同，这里暂不做区分，现在看下面这些区别比较大的方面：
	一：混合方法：方法犹如声明的集合，使用时直接键入名称即可:
		1.无参数方法\有参数方法；
		2.方法的匹配模式；
		3.方法的命名空间；
		2.方法的条件筛选；（Less 没有 if else，可是它有 when）
	二：继承：
		1.extend 关键字的使用；
		2.all 全局搜索替换；
-->

<style lang="scss">
	$width:90px;
	$color:#99a9bf;
	$size:0;
	$num:50%;
	@mixin border-radius($radius){
		border-radius: $radius;
      	-ms-border-radius: $radius;
     	-moz-border-radius: $radius;
  		-webkit-border-radius: $radius;
	}
	@mixin background($color){
		background: $color;
	}
	%common-div{
		position: relative;
		left:$num;
		top:$num;
		width:200px;
		height: 100px;
		font-size: 26px;
		color:#fff;
		margin-left:-100px;
		margin-top:-50px;
		text-align:center;
		line-height: 100px;
		background:red;
		border-radius: 10px;
	}
	.demo-table-expand{
		font-size:0px;
		label{
			$color:red;
			width:$width;
			color:$color;/*red*/
		}
		.special{
			color:$color;/*#99a9bf*/
		}
	}
	.demo-table-expand .el-form-item{
		margin-left:$size;
		margin-bottom:$size;
		width:50%;
	}
	/*.testScss{
		@include border-radius(10px);
		@include background(yellow);
	}*/
	.testScss{
		@extend %common-div;
	}
</style>
<!--
	scss:
	混合(mixin):用来分组那些需要在页面中复用的css声明，目前使用@mixin name来操作;
	继承:通过@extend指令在选择器之间复用css属性;
	操作符:scss提供标准的算术运算符，+-*/%。比如：width: 600px / 960px * 100%;
	引用"&"父级选择器：Scss使用"&"关键字在CSS规则中引用父级选择器;
-->