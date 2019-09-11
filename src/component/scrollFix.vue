<template>
    <div>
        <div class="header-zone-wrapper">
            <!-- 卡片区域滑动到顶部后展示的缩略区域 -->
            <div
                class="slide-top-content-wrapper"
                ref="slideTopContentRef"
                :style="computedTopZoneStyle"
            >
                <div 
                    class="slide-top-area"
                    :style="computedContentAppearStyle"
                >
                    <div style="margin-left:50px">
                        <img 
                            src="https://haitao.nos.netease.com/52515c00-93fe-4446-b87b-677f20649b3f_25_26.png"
                            style="width:28px;height:28px;display:inline-block"
                        >
                        <div style="display:inline-block; vertical-align:middle;margin-left:10px">
                            <span>LANCOME 兰蔻眼霜</span>
                        </div>
                    </div>
                    
                    <div style="display:inline-block;margin-right:10px">
                        <span>￥3680</span>
                    </div>
                </div>
            </div>

            <!-- 默认展示的卡片区域 -->
            <div 
                class="header-content-wrapper"
                ref="headerContentRef"
            >
                <div class="header-content-wrapper__top-section">
                    <img src="https://haitao.nos.netease.com/c6ee0ca4-3ad8-4461-949e-7a48d141c3d1_65_63.png" style="width:75px;height:75px;display:inline-block;margin-left:10px">
                    <div class="product-info">
                        <div style="font-size:16px">LANCOME 兰蔻新菁纯甄颜丝润晚霜50ml</div>
                        <div style="margin-left:-4px">
                            <span style="ont-size: 16px;color: #1E1E1E;text-align: left;">￥3680</span>
                            <img src="https://haitao.nos.netease.com/3f311a35-203b-4d08-9e60-ee8cabdf6332_85_19.png" style="margin-left:4px">
                            <div class="product-watch">
                                <span>点击查看</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-content-wrapper__bottom-section">
                    <img src="https://haitao.nos.netease.com/dd88c9c0-01e1-4bb9-a5fd-138f7948576c_53_22.png" style="width:48px;height:20px; display:inline-block">
                    <span style="vertical-align:center">等38位超会买的黑卡用户都在推荐</span>
                </div>
            </div>
        </div>

        <!-- 内容区域 -->
        <div style="width:100%;height:2000px;background:red;margin-top:80px">

        </div>
    </div>
    
</template>

<script>
// 卡片滚动吸顶到某个位置后，在头部展示小得固定内容
/**
 * 向上滑动的
 */
import _ from 'loadsh';
export default {

    data() {
        return {
            slideTopContentRectInfo: {},
            effectiveDistance: 200, // 计算顶部最终展示区域opactiy需要多久由0过渡到1
            effectiveContentDistance: 0, // 头部内容区域开始滚动的有效距离
            slideDistance: 0, // 页面滚动距离
            debounceScroll: null,

        }
    },

    mounted() {
        document.documentElement.scrollTop = 0;
        window.scrollTo(0,0)
        this.debounceScroll = _.debounce(this.doScroll);
        window.addEventListener('scroll', this.debounceScroll, false);
        this.initData();
    },

    methods: {
        doScroll(e) {
            const visibleHeight = document.documentElement.clientHeight || window.innerHeight; // 页面内容高度
            const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop; // 滚动距离(为什么滚动快和慢这个数值会变)，滚动快了之后，可能从170直接就变为了200多
            const offsetHeight = document.body.offsetHeight || document.documentElement.offsetHeight; // 某个元素距离顶部的偏移距离
            this.slideDistance = scrollHeight; // 更新滚动距离
        },

        initData() {
            const slideTopContentRef = this.$refs.slideTopContentRef;
            const headerContentRef = this.$refs.headerContentRef; 
            this.slideTopContentRectInfo = slideTopContentRef.getBoundingClientRect();
            this.effectiveDistance = headerContentRef.getBoundingClientRect().top + headerContentRef.getBoundingClientRect().height / 2; // 顶部白色区域出现的距离
            this.effectiveContentDistance = 34 + Math.abs(this.effectiveDistance); // 顶部白色区域中的内容出现的距离，34为内容区的高度
        },
    },

    computed: {
        //计算顶部最终显示区域的样式渐变0-1, 200px, 每滑动1px，opactivy增加0.005
        computedTopZoneStyle() {
            const opacity = (1 / Math.abs(this.effectiveDistance)) *  Math.abs(this.slideDistance);
            if (Math.abs(this.slideDistance) > Math.abs(this.effectiveDistance) || opacity > 1) {
                return {
                    opacity: 1,
                }
            }
            return {
                opacity: opacity,
            }
        },

        /**
         * 当滑动到指定高度的时候，内容才开始从下往上滑动上来, 34最后滑动到0
         * 等到opacity为1的时候，再改变
         */
        computedContentAppearStyle() {
            let contentTranslate = this.effectiveContentDistance - Math.abs(this.slideDistance);
            if (contentTranslate <=0) {
                contentTranslate = 0
            }
            if (contentTranslate > 34) {
                contentTranslate = 34;
            }
            return {
                transform: `translate3d(0px, ${contentTranslate}px, 0px)`
            }
        }
    },
    
    destroyed() {
        window.removeEventListener('scroll', this.debounceScroll, false);
    }
}
</script>

<style scoped>
    .header-zone-wrapper {
        width: 100%;
        height: 135px;
        background-image: linear-gradient(270deg, #F6D3A7 22%, #F4D2A6 78%);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border: 1px solid  #F6D3A7;
        position: relative;
    }
    .header-content-wrapper {
        background-color: #ffffff;
        height: 148px;
        margin: 0 auto;
        margin-top: 44px;
        background: #FFFFFF;
        border-radius: 16px;
        box-shadow: 0px 0px 6px #888888;
        margin-right: 9px;
        margin-left: 9px;
        padding-left: 5px;
        padding-right: 5px;
        overflow: hidden;
        border: 1px solid #888888;
    }
    .slide-top-content-wrapper {
        width: 100%;
        height: 47px;
        background-color: #ffffff;
        position: fixed;
        top:0;
        left: 0;
        opacity: 0;
        overflow: hidden;
        
    }
    .slide-top-area {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #000 !important;
        height: 100%;
    }
    .product-watch {
        float: right;
        border: 1px solid #666666;
        border-radius: 21px;
        width: 62px;
        height: 22px;
        font-size: 12px;
        text-align: center;
        line-height: 21px;
        margin-right: 5px;
    }
    .product-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 31px;
    }
    .header-content-wrapper__top-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        border-bottom: 1px solid #E6E6E6;
        padding-bottom: 7px;

    }
    .header-content-wrapper__bottom-section {
        margin-top: 14px;
    }
</style>