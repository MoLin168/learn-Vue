<template>
	<div id="login">
		<!--登录-->
		<div id="loginForm">
			<el-form ref="loginObj" :rules="logonRules" :model="loginObj" label-width="80px" style="width:80%;">
				<el-form-item label="用户名" prop="name">
					<el-input type="username" v-model="loginObj.name" placeholder="请输入用户名" prefix-icon="el-icon-edit"
					@keydown.enter.native="startLogin"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="loginObj.pass" placeholder="请输入密码" prefix-icon="el-icon-edit" @keydown.enter.native="startLogin"></el-input>
				</el-form-item>
				<el-form-item>
					<el-checkbox v-model="loginObj.checked" class="loginCheckbox">下次自动登录</el-checkbox>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="button1" @click="startLogin('loginObj')">登录</el-button>
					<el-button type="primary" @click="showRegisterFlag = true" class="button">注册</el-button>
					<el-button type="primary" @click="resetInfo('loginObj')" class="button">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
		<!--注册-->
		<div id="registerForm">
			<el-dialog ref="registerObj" title="注册账号" :visible.sync="showRegisterFlag" width="400px" @close="clearAllData">
				<el-form ref="registerObj" :model="registerObj" :rules="registerRules" label-width="80px" style="width:100%">
					<el-form-item label="用户名" prop="name">
						<el-tooltip effect="light" placement="right-start" content="请输入4-14个英文字符">
							<el-input type="username" v-model="registerObj.name" placeholder="请输入用户名" suffix-icon="el-icon-edit"></el-input>
						</el-tooltip>
					</el-form-item>
					<el-form-item label="密码" prop="pass">
						<el-tooltip effect="light" placement="right-start" content="请输入6-14位(数字、字符、符号)组成的密码,不支持空格">
							<el-input type="password" v-model="registerObj.pass" placeholder="请输入密码" suffix-icon="el-icon-edit"></el-input>
						</el-tooltip>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
						<el-tooltip effect="light" placement="right-start" content="请输入6-14位(数字、字符、符号)组成的密码,不支持空格" >
							<el-input type="password" v-model="registerObj.checkPass" placeholder="请再次输入密码" suffix-icon="el-icon-edit"></el-input>
						</el-tooltip>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" class="startRegister" @click="register('registerObj')">注册</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
		</div>
	</div>
</template>
<script>
	import CONFIG from '@/common/js/config.js'
	export default{
		name:'login',
		data(){
			let checkName = (rule,value,callback) => {
				// let reg = /^[a-z0-9_-]{4,14}$/gi;
				let reg = /^[a-z]{4,14}$/gi;
				if(value === ''){
					callback(new Error('请输入用户名'));
				}else if(!reg.test(value)){
					callback('请输入4-14个英文字符');
				}else{
					callback();
				}
			};
			let validatePass = (rule,value,callback) => {
				let reg0 = /^[0-9]{6,14}$/g;
				let reg1 = /^[a-z]{6,14}$/gi;
				let reg2 = /\s/g;
				let len = value.length;
				if(value === ''){
					callback(new Error('请输入密码'));
				}else if(len < 6 || len > 14){
					callback(new Error('密码只允许6-14位(数字、字符、符号)组成'));
				}else if(reg0.test(value)){
					callback(new Error('密码不允许是纯数字组成'));
				}else if(reg1.test(value)){
					callback(new Error('密码不允许由纯英文字母组成'));
				}else if(reg2.test(value)){
					callback(new Error('密码不允许存在空格字符'));
				}else{
					callback();
				}
			};
			let validateCheckPass = (rule,value,callback) => {
				if(value === ''){
					callback(new Error('请再次输入密码'));
				}else if(value !== this.registerObj.pass){
					callback(new Error('两次密码输入不一致'));
				}else{
					callback();
				}
			};
			return{
				loginObj:{
					name:'',
					pass:'',
					checked:false
				},
				registerObj:{
					name:'',
					pass:'',
					checkPass:''
				},
				showRegisterFlag:false,
				formLabelWidth:'200px',
				logonRules:{
					name:[
						{required:true,message:'用户名不能为空',trigger:'blur'}
					],
					pass:[
						{required:true,message:'密码不能为空',trigger:'blur'}
					]
				},
				registerRules:{
					name:[
						{required:true,validator:checkName,trigger:'blur'}
					],
					pass:[
						{required:true,validator:validatePass,trigger:'blur'}
					],
					checkPass:[
						{required:true,validator:validateCheckPass,trigger:'blur'}
					]
				}
			};
		},
		methods:{
			startLogin:function(formName){
				this.$refs[formName].validate((valid) =>{
					if(valid){
						// console.log(JSON.stringify(this.loginObj));
						let url = CONFIG.API.loginUrl;
						let params = {
							username:this.loginObj.name,
							password:this.loginObj.pass
						};
						params = JSON.stringify(params);
						this.$axios.post(url,
							params
							).then(({data}) =>{
								if(data.ret === 0){
									// console.log(data);
									if(this.loginObj.checked){
										//多存储下用户名、密码、check状态
										CONFIG.Cookie.setCookie('username',this.loginObj.name);
										CONFIG.Cookie.setCookie('password',this.loginObj.pass);
										CONFIG.Cookie.setCookie('checkFlag',this.loginObj.checked);
									}
									CONFIG.Cookie.setCookie('token',data.accesstoken);
									CONFIG.Cookie.setCookie('userid',data.user_id);
									CONFIG.Cookie.setCookie('userGrade',data.user_grade);
									this.$router.push({path:'/manager'});
								}else{
									this.$message({
										message:`登录失败,ret : ${data.ret} ,msg : ${data.ret_msg}`,
										type:'error',
										center:true,
										showClose:true
									});
								}
							}).catch(err =>{
								this.$message({
										message:`登录失败,${err}`,
										type:'error',
										center:true,
										showClose:true
									});
							});
					}else{
						console.log(`login error valid : ${valid}`);
					}
				});
			},
			register:function(formName){
				this.$refs[formName].validate((valid) =>{
					if(valid){
						let url = CONFIG.API.registerUrl;
						let params = {
							username:this.registerObj.name,
							password:this.registerObj.pass
						};
						params = JSON.stringify(params);
						this.$axios.post(url,
							params
						).then(({data}) => {
							if(data.ret === 0){
								this.showRegisterFlag = false;
								this.$message({
									message:`注册成功,请重新登陆`,
									type:'success',
									center:true,
									showClose:true
								});
							}else{
								this.$message({
									message:`注册失败,ret : ${data.ret},msg : ${data.ret_msg}`,
									type:'error',
									center:true,
									showClose:true
								});
							}
						}).catch(err =>{
							this.$message({
									message:`注册失败,${err}`,
									type:'error',
									center:true,
									showClose:true
								});
						});
					}else{
						console.log(`error ${valid}`);
					}
				});
			},
			resetInfo:function(formName){
				this.$refs[formName].resetFields();
			},
			clearAllData:function(){
				this.registerObj = {
					name:'',
					pass:'',
					checkPass:''
				};
				this.$refs['registerObj'].resetFields();
			}
		},
		watch:{
			rememberName:function(){
				console.log('----rememberName');
				let oldName = CONFIG.Cookie.getCookie('name');
				if(name){
					this.loginObj.name = name;
				}
			},
			rememberPass:function(){
				console.log('----rememberPass');
				let oldPass = CONFIG.Cookie.getCookie('pass');
				if(pass){
					this.loginObj.pass = pass;
				}
			}
		},
		computed:{
		},
		mounted(){
			console.log(`mounted`);
			let oldName = CONFIG.Cookie.getCookie('username');
			let oldPass = CONFIG.Cookie.getCookie('password');
			let checkFlag = CONFIG.Cookie.getCookie('checkFlag');
			console.log(`name:${oldName},pass:${oldPass},check:${checkFlag}`);
			if(oldName && oldPass && checkFlag){//checkFlag此时是字符串 'true' !== true
				this.loginObj.name = oldName;
				this.loginObj.pass = oldPass;
				this.loginObj.checked = true;
				// alert(typeof checkFlag);//string
			}
		}
	}
</script>
<style>
	#loginForm{
		position: absolute;
		left:35%;
		top:50px;
		width:500px;
		height: 500px;
	}
	.loginCheckbox{
		margin-left:-210px;
	}
	.button{
		margin-left:50px;
	}
	.button1{
		margin-left:-5px;
	}
	.startRegister{
		width:180px
	}
</style>