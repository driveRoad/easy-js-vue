<template>
    <div class="swiper-tab-container">
        <my-tab
            @tabChange="tabChange"
            ref="myTab"
        >
        </my-tab>

        <!-- <div class="kl-tab-content-swiper"> -->
           <!-- <swiper :options="swiperOption" ref="mySwiper"> -->
                <!-- <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                    <div class="content">
                        I'm Slide {{ slide }}
                    </div>
                </swiper-slide> -->
                <!-- <swiper-slide>
                    <tab-pane></tab-pane>
                </swiper-slide> -->
                <!-- <swiper-slide>
                    <tab-pane2></tab-pane2>
                </swiper-slide> -->
            <!-- </swiper> -->
        <!-- </div> -->

        <div class="swiper-container" id="page">
            <div class="swiper-wrapper">
                <div class="swiper-slide slidepage" >
                    <div class="swiper-container scroll">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slidescroll">
                                内容一
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide slidepage">
                    <div class="swiper-container scroll">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slidescroll">
                                内容二
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        
    </div>
    
</template>

<script>
/**
 * 1. 先写一个tab， 实现页面的切换
 */
import 'swiper/dist/css/swiper.css'
import 'ant-design-vue/dist/antd.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Tabs } from 'ant-design-vue';

import Vue from 'vue';
import { DatePicker } from 'ant-design-vue';
Vue.use(DatePicker);
Vue.use(Tabs);

import MyTab from './tab';
import tabPane from './tab-pane';
// import tabPane2 from './tab-pane2';

export default {
name:'mySwiper',
components: {
    swiper,
    swiperSlide,
    MyTab,
    tabPane,
    'tabPane2': () => import('./tab-pane2')
},
data() {
    return {
        swiperOption: {
            on: {
                touchStart: (e) => {
                    this.touchStart(e)
                },
                slideChangeTransitionEnd:(e) => {
                    this.slideChangeTransitionEnd(e)
                },
               
                
            },
            activeIndex: 0
        },
        swiperSlides: [1, 2, 3, 4, 5],
        currentComponent: tabPane,
        wrapTranslate: 0 //页面的位移
    }
    
},
mounted() {
},
computed: {
   swiper() {
        return this.$refs.mySwiper.swiper
    }
},
methods: {
        /**
         * tab切换事件,监听到子组件的切换，父组件做内容切换
         */
        tabChange(tabIndex) {
            console.log(tabIndex);
            this.swiper.slideTo(tabIndex, 1000, false);
        },

        /**
         * 内容区域变化的时候，切换tab
         */
        changeTabIndex() {

        },

        /**
         * swiper滑动触发的事件，
         */
        touchStart(e) {
        },

        /**
         * swiper move事件
         * 在move过程中，动态设置滑动块的的长度，直到下一个tab的边界
         */
        touchMove(e) {
            // const wrapTranslate = this.swiper.getTranslate();
            // this.wrapTranslate = wrapTranslate;
            // this.$refs.myTab.$setTabSliderWidth(-1*wrapTranslate);
            // // 移动了这些距离，如果没有触发end事件，表示
            // console.log(wrapTranslate);
            e.cancelable && e.preventDefault()

        },

        

        /**
         * slideChangeTransitionStart 
         * 滑动到下一个的时候触发
         */
        slideChangeTransitionStart(e) {
            console.log('transition start');
            console.log(e);
        },

        /**
         * 滑动到另一个页面后调用的
         * 就算滑动到下一个页面
         */
        slideChangeTransitionEnd(e) {
            this.$refs.myTab.setTabIndex(this.swiper.activeIndex);
        }



    }
}
</script>

<style scoped>
    .content {
        width: 100%;
        height: 375px;
        background-color: red;
    }
    .tab-container {
        position: relative;
    }
    .reset {
        padding-inline-start: 0px;
        margin-block-start: 0px;
        margin-block-end: 0px;
        list-style-type: none;
    }
    .reset li {
        float: left;
        color: #ffffff;
        font-size: 12px;
        padding: 12px 16px;
    }
    .reset li:not(:first-child) {
        margin-left: 12px;
    }
    .kl-tab-animated-wrapper {
        overflow: hidden;
    }
    
    .no-active {
        opacity: 0.5;
    }
    .active {
        color: #ffffff;
    }
    .kl-tabs-ink-bar {
        position: absolute;
        bottom: 1px;
        left: 0px;
        height: 2px;
        background-color: #ffffff;
    }
    .kl-tabs-ink-bar-animated {
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .kl-tab-content-swiper {
        touch-action: none;
    }
    .swiper-slide {
        touch-action: none;
    }
    html {
        touch-action: none;
    }

    
</style>