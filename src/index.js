import Vue from 'vue';
import Demo from './component/demo';

Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++"> you clicked me{{count}} </button>'
})

Vue.component('blog-post', {
    props: ['title'],
    template: 
        '<h3>{{title}}</h3>'
})

new Vue({
    el: '#app',
    components: {
        Demo
    },
    data: {
        msg: 'hello vue',
        posts: [
            {id: 1, title: 'My journey with Vue'},
            {id: 2, title: 'Blogging with Vue'},
            {id: 3, title: 'Why Vue is so fun'}
        ]
    }
})