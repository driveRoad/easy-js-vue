<template>
    <div class="kl-tabs-bar kl-tabs-top-bar">
        <div class="kl-tabs-nav-container">
            <!-- 这里可能左右都会有一个箭头导航，当tab多余一行的时候，可以通过箭头进行滚动切换，这种情况基本不会出现 -->
            <div class="kl-tabs-nav-wrapper">
                <!-- 导航栏tab项 -->
                <div>
                    <div 
                        v-for="(item ,index) in tabsList" :key="index"
                        :class="['kl-tabs-item', tabItemSelectIndex == index ? 'kl-tab-active' : '']" 
                        :data-selected="tabItemSelectIndex == index ? true : false"
                        :data-index="index"
                        @click="tabChange"
                    >
                        {{item.name}}
                    </div>
                </div>

                <!-- 底部滑线 -->
                <div class="kl-tabs-ink-bar kl-tabs-ink-bar-animated" :style="klBarStyle" ></div>
            </div>
        </div>
        <!-- 这个下面应该放页面内容 -->
        <div class="kl-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
/**
 * tab组件
 * @prop tabsList: 外部传进来的tab数据
 * 
 * 
 */
import tabPane from './tab-pane';
export default {
    data() {
        return {
            tabsList: [
                {
                    name: "直播精选",
                },
                {
                    name: "直播预告"
                },
                {
                    name: '直播回放'
                },
                {
                    name: '直播查看'
                },
                {
                    name: '直播历史'
                }
            ],
            tabItemSelectIndex: 0, // 记录当前用户所选择的tab项
            slideWidth: 80, //记录滑块的宽度,在页面首次加载的时候要计算出该值，也就是第一个tab的值，也可以由外部决定初始的tab位置，需要动态计算第一个加载tab的滑动块宽度
            slideRecordWidth: 80, // 记录宽度的更新大小
            slideDistance: 0, // 记录滑块滑动的距离
            tabIndex: 0, // 外部传进来的tab项，也就是渲染第几个tab
        }
    },

    components: {
        tabPane
    },

    computed: {
        klBarStyle: function() {
            return {
                display: 'block',
                width: `${this.slideWidth}px`,
                transform: `translate3d(${this.slideDistance}px, 0px, 0px)`
            }
        }
    },

    methods: {
        /**
        * tab切换事件
        */
        tabChange(e) {
            // 设置滚动条的滚动
            const target = e.target || {};
            const index = target.dataset && target.dataset.index || 0;
            const currentTabItemStyle = this.getCurrentTabItemStyle(target);
            if (index >= 0) {
                this.slideDistance = this.slideDistance + (index - this.tabItemSelectIndex) * (currentTabItemStyle.width);
                // 设置当前所选中的tabItem
                this.tabItemSelectIndex = index;
                this.$emit('tabChange', index);
            }
        },

        /**
         * 获取当前tab的宽度
         */
        getCurrentTabItemStyle(target) {
            let styleObj = {};
            if(!target) {
                return styleObj;
            }
            if (target.getBoundingClientRect) {
                styleObj = target.getBoundingClientRect();
                return styleObj;
            }
            // 如果boundingClientRect没取到，则取offsetWidth,offsetHeight
        },

        /**
         * 根据tabIndex设置滑动条滑动到执行tab下
         */
        setTabIndex(index) {
            if (index < 0) {
                return;
            }
            this.slideDistance = this.slideDistance + (index - this.tabItemSelectIndex) * (80);
            this.tabItemSelectIndex = index;
        },

        /**
         * 设置滑动条的宽度，
         * 在页面滚动的时候动态设置
         */
        setTabSliderWidth(distance) {
            if(Math.abs(distance) <= 80) {
                this.slideWidth = this.slideRecordWidth + distance;
            } 
        },

        $setTabIndex(index) {
            this.setTabIndex(index);
        },

        $setTabSliderWidth(distance) {
            this.setTabSliderWidth(distance);
        }
    }
}
</script>

<style scoped>
    .kl-tabs-top-bar {
        
    }
    .kl-tabs-top-bar .kl-tabs-nav-wrapper {
        display: inline-block;
        position: relative;
    }
    .kl-tabs-nav-container {
        overflow: hidden;
        white-space: nowrap;
        background-image: linear-gradient(7deg, #130C20 0%, #2c1733 100%);
    }
    .kl-tabs-item {
        display: inline-block;
        color: #ffffff;
        font-size: 12px;
        padding: 12px 16px;
        opacity: 0.5;
        transition:  opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)
    }
    .kl-tab-active {
        opacity: 1;
    }
    .kl-tabs-ink-bar {
        position: absolute;
        bottom: 1px;
        left: 0px;
        height: 2px;
        background-color: #ffffff;
    }
    .kl-tabs-ink-bar-animated {
        transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

</style>