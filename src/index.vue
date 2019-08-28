

<template>
  <div>
    <anchored-heading :level="1"> this is2 anchored-heading </anchored-heading>
    <vue-instance></vue-instance>
  </div>
</template>

<script>
import Vue from "vue";
import Demo from "./component/demo.vue";
import route from './route';
const moduleDemo = require('./util/module');
import vueInstance from './util/vue-instance-methods';
import InfiniteScroll from './component/infinite-scroll/index.js';

// 注册自定义指令
Vue.use(InfiniteScroll);


Vue.component("button-counter", {
  data: function() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++"> you clicked me{{count}} </button>'
});

Vue.component("blog-post", {
  props: ["title"],
  template: "<h3>{{title}}</h3>"
});

// 渲染函数demo
Vue.component("anchored-heading",{
  render: function(h) {
    console.log('render')
    return h(
      'h' + this.level, // 这个组件最终被渲染为的页面元素，不就是相当于react中的React.createElement吗
      this.$slots.default
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})


export default {};

const app = new Vue({
  el: "#app",
  components: {
    Demo,
    vueInstance
  },
  data: {
    msg: "hello vue",
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" }
    ],
    currentRoute: window.location.pathname
  },
  mounted() {
    console.log(moduleDemo());
  },
  computed: {
      ViewComponent() {
          const matchingView = route[this.currentRoute]
          return matchingView
            ? require('./page/' + matchingView + '.vue')
            : require('./page/notfound.vue')
      }
  },

  // 目前这个路由还有点问题，编译报错
  // render(h) {
  //     return h(this.ViewComponent)
  // }
});

window.addEventListener("popstate", function() {
    app.currentRoute = window.location.pathname
});
</script>
