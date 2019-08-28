<template>
  <div>
    <p>----------------------next is dom postion test ------------------------</p>
    <dom-position></dom-position>
    this is a demo page
    <demo-child>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <p>A paragraph for the main content</p>
      <p>And another one</p>
    </demo-child>
     <p>---------下面是菜单tab------------</p>
    <scroll-tab-fix></scroll-tab-fix>
    
    <current-user>
      <template v-slot:default="slotProps">{{slotProps.user.lastName}}</template>
    </current-user>
    <p>
        ----------- next is dynamic component demo--------------
    </p>
    <!-- <current-component></current-component> -->

    <p>
        ----------------- next is dynamic load component demo------------, when this component before loaded, you can shou loading animate 
    </p>

   
    <async-component></async-component>
    <p v-on:click="change">点我加载组件内容</p>


    <p>--------------------------next is animate component demo ---------------------</p>
    <animate-component></animate-component>
    <p v-if="show">show</p>

    <p>----------------next is v-html--------------</p>
    <p v-html="'<p><h1>你好啊啊</h1></p>'"></p>

    <dom-position></dom-position>

    <test :age="age"></test>

    <!-- vue-instance -->
    <vue-instance>
      <template v-slot:header>
        <h1>About me</h1>
      </template>
      <template v-slot:footer>
        <p>Copyright 2016 Evan You</p>
      </template>
    </vue-instance>


    <!-- vue--自定义指令 -->
    <input type="text" v-InfiniteScroll>
  </div>
</template>
<script>
import demoChild from "./demo-child"
import currentUser from "./current-user"
import currentComponent from "./dynamic-component/current-component"
import asyncComponent from "./async-component/async-component"
import loadingComponent from "./dynamic-component/loading"
import errorComponent from "./dynamic-component/error"
import animateComponent from "./animate-component/animate-component"

import scrollTabFix from "../util/scrollTabFix"
import domPosition from "../util/dom-position"
import Test from "./test"
import vueInstance from "../util/vue-instance-methods"

export default {
  name: "demo",
  data: function() {
      return {
          show: true,
          age:''
      }
  },
  components: {
    demoChild,
    currentUser,
    currentComponent,
    asyncComponent,
    animateComponent,
    domPosition,
    scrollTabFix,
    Test,
    vueInstance
  },
  methods: {
      change: function() {
          this.show = true;
      },
      
  },
  mounted() {
    this.age = 200;
  }
  
};
</script>






