<template>
  <div>
    fada
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
    <div v-on:click="clickme">点我</div>
  </div>
</template>


<script>
const hello = {
  data: function() {
    return {
      fontColor: {
        color: "red"
      }
    };
  },
  methods: {
    change: function() {
      this.fontColor.color = "yellow";
    }
  },
  template: '<p v-on:click="change" v-bind:style="fontColor">Hello</p>'
};
const sad = {
  data: function() {
    return {
      fontColor: {
        color: "green"
      }
    };
  },
  methods: {
    change: function() {
      this.fontColor.color = "yellow";
    }
  },
  template: '<p v-on:click="change" v-bind:style="fontColor">Sad</p>'
};
const happy = {
  data: function() {
    return {
      fontColor: {
        color: "blue"
      }
    };
  },
  methods: {
    change: function() {
      this.fontColor.color = "yellow";
    }
  },
  template: '<P v-on:click="change" v-bind:style="fontColor">Happy</P>'
};

export default {
  name: "currentComponent",
  components: {
    hello,
    sad,
    happy
  },
  data: function() {
    return {
      attr: ["hello", "sad", "happy"],
      index: 0
    };
  },
  computed: {
    currentView: function() {
      console.log(this.attr[this.index]);
      return this.attr[this.index];
    }
  },
  methods: {
    clickme: function() {
      console.log(this.index);
      if (this.index >= 2) {
        this.index = 0;
      } else {
        this.index++;
      }
    }
  }
};
</script>

<style>
</style>
