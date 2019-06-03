<template>
	<div id="formTest">
		<div id="header">
			<span class="fa fa-home homed"></span>
			<span class="fa fa-address-card homed"></span>
			<span class="fa fa-anchor homed"></span>
			<span class="fa fa-asterisk homed"></span>
			<span class="fa fa-bank homed"></span>
			<span class="fa fa-bath homed"></span>
		</div>
		<div id="content">
			<div id="formDiv">
				<el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
					<el-form-item label="活动名称" prop="name">
						<el-input v-model="ruleForm.name" placeholder="活动名称"></el-input>
					</el-form-item>
					<el-form-item label="活动区域" prop="position">
					    <el-select v-model="ruleForm.position" placeholder="请选择活动区域" class="sameWidth">
					      <el-option label="成都" value="shanghai"></el-option>
					      <el-option label="重庆" value="chongqing"></el-option>
					      <el-option label="深圳" value="shenzhen"></el-option>
					      <el-option label="北京" value="beijing"></el-option>
					    </el-select>
					</el-form-item>
					<el-form-item label="活动时间" required>
					 	<el-col :span="11">
					 		<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" class="sameWidth"></el-date-picker>
							</el-form-item>
					 	</el-col>
					 	<el-col class="line" :span="2">-</el-col>
				 		<el-col :span="11">
							<el-form-item prop="date2">
				 				<el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" class="sameWidth" format="HH:mm:ss" value-format="HH:mm:ss"></el-time-picker>
				 			</el-form-item>
				 		</el-col>
					</el-form-item>
					<el-form-item label="及时配送">
					 	<el-switch v-model="ruleForm.delivery" class="elSwitch"></el-switch>
					</el-form-item>
					<el-form-item label="活动性质" prop="type">
					 	<el-checkbox-group v-model="ruleForm.type">
					 		<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					 		<el-checkbox label="地推活动" name="type"></el-checkbox>
					 		<el-checkbox label="说的话安抚" name="type" class="elCheckbox"></el-checkbox>
					 		<el-checkbox label="好还是的撒旦" name="type"></el-checkbox>
					 	</el-checkbox-group>
					</el-form-item>
					<el-form-item label="特殊资源" prop="resource">
					 	<el-radio-group v-model="ruleForm.resource">
					 		<el-radio label="线上" class="elRadio"></el-radio>
					 		<el-radio label="线下"></el-radio>
					 	</el-radio-group>
					</el-form-item>
					<el-form-item label="活动建议" prop="des">
					 	<el-input type="textarea" v-model="ruleForm.des"></el-input>
					</el-form-item>
					<el-form-item label="年龄" prop="age">
						<el-input type="age" v-model.number="ruleForm.age" ></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pass">
						<el-input type="password" v-model="ruleForm.pass"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
						<el-input type="password" v-model="ruleForm.checkPass"></el-input>
					</el-form-item>
					<el-form-item>
					 	<el-button type="primary" @click="submitForm('ruleForm')">创建</el-button>
					 	<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item >
				</el-form>
			</div>
		</div>
		<div id="footer">
			哈哈哈哈哈
		</div>
	</div>
</template>
<script>
	export default {
		name:'formTest',
		data(){
			var validatePass = (rule,value,callback) => {
				if(value === ''){
					callback(new Error('请输入密码'));
				}else {
					if(this.ruleForm.checkPass !== ''){
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validateCheckPass = (rule,value,callback) => {
				if(value === ''){
					callback(new Error('请再次输入密码'));
				}else if(value !== this.ruleForm.pass){
					callback(new Error('两次输入的密码不一致'));
				}else{
					callback();
				}
			};
			return{
				ruleForm:{
					name:'',
					position:'',
					value:'',
					date1:'',
					date2:'',
					delivery:false,
					type:[],
					resource:'',
					des:'',
					age:'',
					pass:'',
					checkPass:''
				},
				rules:{
					name:[
						{required:true,message:'请输入活动名称',trigger:'blur'},
						{min:3,max:5,message:'长度在 3 到 5 个字符',trigger:'blur'}
					],
					position:[
						{required:true,message:'请选择活动区域',trigger:'change'}
					],
					date1:[
						{type:'date',required:true,message:'请选择日期',trigger:'change'}
					],
					date2:[
						{required:true,message:'请选择时间',trigger:'change'}
					],
					type:[
						{type:'array',required:true,message:'请选择一个活动性质',trigger:'change'}
					],
					resource:[
						{required:true,message:'请选择活动资源',trigger:'change'}
					],
					des:[
						{required:true,message:'请填写活动性质',trigger:'blur'}
					],
					age:[
						{required:true,message:'年龄不能为空'},
						{type:'number',message:'年龄必须是数字值'}
					],
					pass:[
						{required:true,validator:validatePass,trigger:"blur"}
					],
					checkPass:[
						{required:true,validator:validateCheckPass,trigger:'blur'}
					]
				}
			};
		},
		methods:{
			submitForm:function(formName){
				this.$refs[formName].validate((valid) => {
					if(valid){
						console.log(this.$refs[formName]);//上述需要提交的表单组件
						this.$message({
							message:`start submitForm`,
							center:true,
							showClose:true,
							type:'success'
						});
						console.log(JSON.stringify(this.ruleForm));//输出的结果
					}else{
						// this.$message({
						// 	message:`submitForm error`,
						// 	center:true,
						// 	showClose:true,
						// 	type:'error'
						// });
					}
				});
			},
			resetForm:function(formName){
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
<style scoped>
	#header{
		position: relative;
		left:0px;
		top:0px;
		height: 50px;
	}
	.homed{
		font-size:26px;
		color:#4285F4;
	}
	#content{
		position: relative;
		line-height: 600px;
		height: 800px;
		border:1px solid #7d7d7d;
	}
	#footer{
		position:relative;
		bottom:0px;
		height:35px;
	}
	#header #content #footer{
		width:280px;
		margin-left:auto;
		margin-right:auto;
	}
	#formDiv{
		position: relative;
		top:0px;
		left:35%;
		width:400px;
		height: 600px;
		text-align: center;
	}
	.elSwitch{
		float:left;
		margin-top:10px;
	}
	.sameWidth{
		width:100%;
	}
	.elCheckbox{
		margin-left:-3px;
		margin-right:75px;
	}
	.elRadio{
		margin-left:-150px;
	}
</style>