<template>
  <div>
      <swiper>
      </swiper>
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
import Swiper from "./swipper/swipper"

export default {
  name: "demo",
  data: function() {
      return {
          show: true,
          age:''
      }
  },
  components: {
    // demoChild,
    // currentUser,
    // currentComponent,
    // asyncComponent,
    // animateComponent,
    // domPosition,
    // scrollTabFix,
    // Test,
    // vueInstance
    Swiper
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






