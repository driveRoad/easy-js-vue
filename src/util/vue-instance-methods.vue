<template>
    <div>
        fadfa
    </div>
</template>

<script>
/**
 * vue的实例属性和方法
 * 1.data: 通过VM.$data获取到该组件的所有定义数据
 * 2.prop: 通过VM.$prop获取到该组件接收的props数据
 * 3.$el: Vue实例的根元素节点,当前组件根节点的dom对象
 * 4.$parent: 当前组件的父实例
 * 5.$root, $children, 获取血亲相关的数据
 * 6.$slots插槽
 */
export default {
    data() {
        return {
            name: 'vue-instance',
            age: 12
        }
    },
    props: {
        title: {
            type: String,
            default: 'hello vue'
        }
    },
    mounted() {
        // 1.
        console.log('打印出vm.$data');
        console.log(this.$data);
        //2
        console.log('打印出vm.$prop');
        console.log(this.$props);
        //3
        console.log('打印出根元素节点,');
        console.log(this.$el.getClientRects);
        //4
        console.log('打印出父实例');
        console.log(this.$parent);

        //5
        console.log('打印出插槽'); // 这个在使用渲染函数渲染子组件的时候很有用，相当于我可以获取到该组件的子组件，然后通过这个实例属性获取到，进行创建
        //那这个是不是和$children一样
    }
}
</script>

<style>

</style>
