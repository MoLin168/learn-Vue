let CONFIG = {
	API:{
		registerUrl:'http://collectionsrv.homed.me:18555/user/regist',
		loginUrl:'http://collectionsrv.homed.me:18555/user/login',
	},
	Cookie:{
		getCookie:function(name){
			if (new RegExp('.*\\b' + name + '\\b(\\s*=([^&;]+)).*', 'gi').test(document.cookie)) {
	                return unescape(RegExp.$2);
	            } else {
	                return '';
	            }
		},
		setCookie:function(name,value){
			let time = new Date();
			time.setTime(time.getTime()+3*30*24*3600*1000);//3个月*天数*小时*秒*1000（转化为ms）
			document.cookie = name + '=' + value + ';expires=' + time.toGMTString()+";path=/";
		},
		deleteCookie:function(name){
			let time = new Date();
			time.setTime(time.getTime() - 1);
			let currE = this.getCookie(name);
			if(currE){
				document.cookie = name + "=" + currE + ";expires=" + time.toGMTString();
			}
		}
	}
};
module.exports = CONFIG;
