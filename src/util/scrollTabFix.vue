<template>
    <div id="tab-container">
        <ul v-on:click="changeTab">
            <li class="tab-item">旅行</li>
            <li class="tab-item">美食</li>
            <li class="tab-item">汽车</li>
            <div class="clc"></div>
        </ul>
        <div class="tab-item-content">
            <component :is="currentComponent"></component>
        </div>
    </div>
    
</template>

<script>
// <!-- 实现一个中间tab滚动到顶部位置后固定，上拉操作使得中间tab菜单固定，下滑操作使得tab菜单恢复 -->
/**、
 * 1. 写好一个菜单，滚动固定
 */

export default {
    data() {
        return {
            tabPosition:{}, // 记录页面tab位置
            scrollPosition: {}, // 记录页面滑动的位置
            targetObj: ''
        }
    },

    mounted() {
        /**
         * 1.tab的位置
         */
        let targetObj = document.getElementById('tab-container');
        let boundingPosition = targetObj.getBoundingClientRect();
        let offsetPosition = {};
        offsetPosition.top = targetObj.offsetTop;
        this.tabPosition.offsetTop = offsetPosition.top;
        this.tabPosition.rectTop = offsetPosition.top;
        this.targetObj = targetObj;
        // 注册scroll事件，先不考虑防抖
        window.addEventListener('scroll',this.pageScroll.bind(this))
    },

    

    methods: {
        // tab切换事件
        changeTab(){
            
        },

        // 页面滑动事件
        pageScroll(e){
            e.preventDefault();
            e.stopPropagation();
            let top = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
            this.scrollPosition.top = top;

            // 计算是否滑动到目标元素
            if (top >= this.tabPosition.offsetTop) {
                console.log('走到菜单位置了');
                if (this.targetObj) {
                    this.targetObj.style.position = "fixed"
                    this.targetObj.style.top = 0;
                    this.targetObj.style['z-index'] = 1000;
                }
               
            } else {
                if (this.targetObj) {
                    this.targetObj.style.position= "relative";
                    // this.targetObj.style['z-index'] = 0;
                }
                
            }
        }
    },
    computed:{
        currentComponent() {

        }
    }

}
</script>

<style>
body{ 
    margin:0;
}
    #tab-container {
        width: 100%;
        background-color: brown;
    }
    .tab-item {
        width: 50px;
        height: 30px;
        color:white;
        float: left;
        line-height: 30px;
        text-align: center;
        list-style: none;
    }
    .clc{
        clear: both;
    }

</style>
