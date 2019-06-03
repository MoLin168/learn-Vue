<template>
	<div id="jsHook">
		<button @click="show = !show">toggle</button>
		<!--v-bind:css="false"  Vue会跳过CSS的检测。这也可以避免过渡过程中CSS的影响-->
		<br>
		<transition
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			v-on:leave="leave"
			v-bind:css="false"
		>
		<p v-if="show">hook demo</p>		
		</transition>
	</div>
</template>
<script>
	export default{
		name:'jsHook',
		data:() => ({
			show:false
		}),
		created(){

		},
		computed:{

		},
		methods:{
			beforeEnter:function(el){	
				el.style.opacity = 0
				el.style.transfromOrigin = 'left'
			},
			enter:function(el,done){
				Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      			Velocity(el, { fontSize: '1em' }, { complete: done })
			},
			leave:function(el, done){
				Velocity(el,{translateX: '15px', rotateZ: '50deg'},{duration: 500})
				Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
				Velocity(el, {
			        rotateZ: '45deg',
			        translateY: '30px',
			        translateX: '30px',
			        opacity: 0
			      }, {complete: done})
			}
		},
		mounted(){

		}
	}
</script>
<style scoped>
	
</style>