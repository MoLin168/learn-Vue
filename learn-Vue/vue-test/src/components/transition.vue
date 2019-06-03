<template>
	<div id="transitionDiv">
		<button @click="show = !show">toggle</button>
		<transition name="fade">
			<p v-if="show">test transition</p>
		</transition>

		<!--过渡-->
		<button @click="slide = !slide">toggle render</button>
		<transition name="slide">
			<p v-if="slide">slide show</p>
		</transition>

		<!--动画-->
		<button @click="bounceFlag = !bounceFlag">toggle bounce</button>
		<transition name="bounce">
			<p v-if="bounceFlag">test bounce test bounce test bounce</p>
		</transition>

		<!--animate-->
		<button @click="animatesFlag = !animatesFlag">test animates</button>
		<transition 
		><!--
			name="animatedCss"
			enter-active-class="animated tada"
			leave-active-class="animated bounceOutRight"
			貌似暂时不支持
		-->
		<p v-if="animatesFlag">learn animate css</p>
		</transition>

		<!--test duration-->
		<button @click="durationFlag = !durationFlag">toggle duration</button>
		<p>{{durationFlag}}</p>
		<transition :duration="500">
		<!-- <transiton :duration="{enter:400,leave:400}"> --><!--貌似不支持-->
			<p v-if="durationFlag">test transition duration</p>
		</transition>

		<!--transition mode 多个元素-->
		<transition name="fade" mode="out-in">
			<button @click="modeFlag = !modeFlag" v-if="modeFlag" key="on">on</button>
			<button @click="modeFlag = !modeFlag" v-else key="off">off</button>
		</transition>	
		<br><br><br>

		<!--transition mode component 多个组件过渡-->
		<input type="checkbox" @click="view = 'v-a'" id="a"><label for="a">A</label>
		<input type="checkbox" @click="view = 'v-b'" id="b"><label for="b">B</label>
		<transition name="component-fade" mode="out-in">
			<component v-bind:is="view"></component>
		</transition>


		<br><br><br><br>

		<!--列表排序过渡-->
		<button @click="shuffle">Shuffle</button>
		<button @click="add">Add</button>
		<button @click="remove">Remove</button>
		<transition-group name="list-component" tag="p">
			<span
				v-for="item in items"
				v-bind:key="item"
				class="list-component-item"
			>
				{{item}}
			</span>
		</transition-group>

		<br><br><br>
		<!--列表的交错过渡-->
		<input type="text" v-model="query">
		<transition-group
			name="staggered-fade"
			tag="ul"
			v-bind:css="false"
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			v-on:leave="leave"
		>
			<li
				v-for="(item,index) in computedList"
				v-bind:key="item.msg"
				v-bind:data-index="index"
				class="liClass"
			>
			{{item.msg}}
			</li>
		</transition-group>
	</div>
</template>
<script>
	export default{
		name:'transitionDiv',
		data:() => ({
			show:true,
			slide:true,
			bounceFlag:true,
			animatesFlag:true,
			durationFlag:true,
			modeFlag:true,
			view:'v-a',
			items:[1,2,3,4,5,6,7,8,9],
			nextNum:10,
			query:'',
			list:[
				{ msg: 'Bruce Lee' },
			    { msg: 'Jackie Chan' },
			    { msg: 'Chuck Norris' },
			    { msg: 'Jet Li' },
			    { msg: 'Kung Fury' }
			]
		}),
		computed:{
			computedList:function(){
				let vm = this;
				return this.list.filter((item) => {
					return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
				})
				}
		},
		methods:{
			randomIndex:function(){
				return Math.floor(Math.random() * this.items.length)
			},
			add:function(){
				this.items.splice(this.randomIndex(),0,this.nextNum++)
			},
			remove:function(){
				this.items.splice(this.randomIndex(),1)
			},
			shuffle:function(){
				this.items = _.shuffle(this.items)
			},
			beforeEnter:function(el){
				el.style.height = 0
				el.style.opacity = 0
			},
			enter:function(el,done){
				let delay = el.dataset.index * 150
				setTimeout(function(){
					Velocity(el,{opacity:1,height:'1.6em'},{complete:done})
				},delay)
			},
			leave:function(el,done){
				let delay = el.dataset.index * 150
				setTimeout(function(){
					Velocity(el,{opacity:0,height:0},{complete:done})
				},delay)
			}
		},
		components:{
			'v-a':{
				template:'<div>Component A</div>'
			},
			'v-b':{
				template:'<div>Component B</div>'
			}
		}
	}
</script>
<style>
	/**/
	.fade-enter-active,.fade-leave-active{
		transition:opacity .8s;
	}
	.fade-enter,.fade-leave-to{
		opacity: 0;
	}

	/*过渡*/
	.slide-enter-active{
		transition:all .3s ease;
	}
	.slide-leave-active{
		transition:all .8s cubic-bezier(1.0,0.5,0.8,1.0);
	}
	.slide-enter,.slide-leave-to{
		transform: translateX(10px);
		opacity: 0;
	}

	/*动画*/
	.bounce-enter-active{
		animation:bounce-in .5s;
	}
	.bounce-leave-active{
		animation:bounce-in .5s reverse;
	}
	@keyframes bounce-in{
		0%{
			transform:scale(0);
		}
		50%{
			transform: scale(1.5);
		}
		100%{
			transform: scale(1);
		}
	}

	/*transition component mode*/
	.component-fade-enter-active,.component-fade-leave-active{
		transition:opacity .3s ease;
	}
	.component-fade-enter,.component-fade-leave-to{
		opacity: 0;
	}

	/*列表排序过渡*/
	.list-component-item{
		transition:all 1s;
		display: inline-block;
		margin-right:10px;
	}
	.list-component-enter,.list-component-leave-to{
		opacity: 0;
		transform:translateY(30px);
	}
	.list-component-leave{
		position:absolute;
	}

	/*列表交错过渡*/
	.liClass{
		list-style-type: none;
	}
</style>