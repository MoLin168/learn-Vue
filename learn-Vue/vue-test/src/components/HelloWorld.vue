<template>
<!--   <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div> -->

  <!--
  learn指令:
  v-show ：控制dom节点是否显示隐藏，已经进行了dom的渲染工作，只是切换display
  v-if ：控制dom节点是否存在
  v-on ：绑定事件监听器
  v-model：表单或组件上创建双向绑定
  v-for:循环
  v-bind：动态绑定一个或多个特性，或一个组件prop到表达式
  v-once:只首次刷新数据
  v-html：输出html代码
  -->

<!--   <span v-bind:title="msg" class="tips">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span> -->
 <!--  <div>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.id">{{todo.text}} {{todo.id}}</li>
    </ol>
  </div> -->
  <!-- <div>
    <p v-if="showFlag">v-if测试</p>
    <p v-show="showFlag">v-show测试</p> -->
    
     <!--  v-if:是控制dom节点是否存在
      v-show:是控制dom节点是否显示隐藏
      多次使用可以用v-show,节省资源；只用一次就用v-if 
      当v-for和v-if同时使用时：前者比后者的优先级要高
      -->

  <!-- </div> -->

<!--   <div>
    <p>{{message}}</p>
    <input v-model="message"><br>
    <button v-on:click="reverseMessage">reverse</button>
    <p>{{testCop}}</p>
  </div> -->

  <!--test parent component transport message to next component-->
  <!-- <div>{{msg}}</div> -->
  <!--此处貌似不支持v-html:不能使用v-html来复合局部模板，因为Vue不是基于字符串的模板引擎-->
  <!-- <div>{{htmlStr}}</div> -->
  <!-- <p><span v-html="htmlStr"></span></p> -->
  <!-- <span v-html="htmlStr"></span> -->
  <!--test computed-->
<!-- <div>{{testCop}}</div> -->

<!--test class style-->
<!-- <div v-bind:class="{active:isActive,error:hasError}">test class style</div> -->
<!-- <div v-bind:class="testObjClass"></div> --><!--class="active focus"-->
<!-- <div v-bind:class="[activeClass,errorClass]"></div> --><!--class="active error"-->
<!-- <div v-bind:class="[{active:isActive},errorClass]"></div> -->
<!-- <div v-bind:style="styleObject">test style</div> -->

<!--多重值：浏览器渲染数组中最后一个被浏览器支持的值-->
<!-- <div v-bind:style="{display:['-webkit-box','-ms-flexbox','flex']}"></div> -->

<!--组件之间的v-if v-else切换
Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染
key值的作用：这两个元素是完全独立的，不要复用它们-->
<!-- <div v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="please input your name" key="username-input">
  <button @click="changeInput">toggle input</button>
</div>
<div v-else>
  <label>Email</label>
  <input placeholder="please input your email address" key="email-input">
  <button @click="changeInput">toggle input</button>
</div> -->

<!--测试全局注册的组件-->
<!-- <div id="HelloWorld">
  <button-counter></button-counter>
<button-counter></button-counter>
</div> -->
</template>
<script>
//现在有个疑惑：不知道怎样在control台上修改下面的data数据，然后实现数据的自动刷新（可以通过vue插件来调试）
export default {
  name: 'HelloWorld',
  props:['msg'],
  data(){
    return {
      // msg: '页面加载于：' + new Date().toLocaleString(),
     // message:'hello world!',
     // htmlStr:'<span style="color:red">this should be red</span>',
      todos:[
        {text:'start learn js'},
        {text:'start learn vue'},
        {text:'start learn webpack'}
      ],
      // seen:true,
     // showFlag:false
     isActive:true,
     hasError:true,
     activeClass:'active',
     errorClass:'error',
     loginType:'username'
    }
  },
  methods:{
    reverseMessage:function(){
      this.message = this.message.split('').reverse().join('')
    },
    init:function(){
      this.$emit('test','next component')//通过修改子组件的值来改变父组件的msg值
    },
    changeInput:function(){
      this.loginType = this.loginType === 'username' ? 'email' : 'username'
    }
  },
  created(){
    console.log('created')
    console.log(this)
  },
  computed:{//计算属性,具有缓存作用，只有当依赖发生改变时才会二次触发计算
    testCop:function(){
      console.log('test computed='+this.message)//（这里依赖是this.message）
    },
    testObjClass:function(){
      return {
        active:this.isActive,
        focus:this.hasError
      }
    },
    styleObject:function(){
      return {
        fontSize:'20px',
        border:'1px solid red',
        width:'200px',
        height:'100px',
        lineHeight:'100px',
        textAlign:'center',
        position:'relative',
        left:'0px',
        right:'0px'
      }
    },
    changeValue:function(_val){
      this.changeInput();
    }
  },
  mounted(){
    console.log('mounted')
    this.init()
  },
  watch:{//侦听属性，数据变化时执行异步或开销较大的操作时
    watched:function(){
      this.message = 'start watched'
      console.log('watched='+this.message)
    },
    unwatched:function(){
      console.log('unwatched');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>-->
<style scoped>
  .tips{
    position: relative;
    width:100%;
    height:100px;
    line-height: 100px;
    text-align: center;
  }
</style>
