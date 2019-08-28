<template>
    <div>
        <div class="box1-container">
            <div class="box1">
                盒子一
                faf
                fasd
                fasdfa
                fa
                <p>fasdfa</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你哈</p>
                <p>你好</p>
                <p>你好</p>
            </div>
        </div>
        

        <div class="box2" >
            盒子二
        </div>
        <div class="box3-container">
            <div class="box3" :ref="box3">
                盒子三
            </div>
        </div>
        
        <div @click="gotoTop" class="goto">
            点击我滚动到顶部
        </div>
        </div>
    
    
</template>

<script>
/**
    1.目的为了搞清楚元素位置，各种api的含义，主要涉及到
    clientXY: clientWidth, cliendHeight
    pageXY: pageWidth, pageHeight
    offsetXY: offsetWidth, offsetHeight, offsetLeft, offsetTop
    screenXY: 
    scrollLeft, scrollTop, scrollWidth, scrollHeight,
    innerWidth,
    outerWidth

 */
export default {
    data() {
        return {
            box3: '',
        }
    },
    mounted() {
        // 挂载完成后
        const dom1 = document.getElementsByClassName('box1')[0];
        const dom3 = document.getElementsByClassName('box3')[0];
        const rect = dom1.getBoundingClientRect();
        console.log('--------------元素的boundingClientRect---------------');
        console.log(rect);
        // 所以rect是渲染后的元素节点的属性信息，padding, border都会算上，。返回的信息包含： width: rect.width，元素的宽度， height: rect.height 元素的高度
        // rect.left: 元素左边缘到可视区域最左边的距离，rect.right: 元素右边缘到可视区域最左边的距离。都是以左边为标准
        // rect.bottom, rect.top： 都是以可视区域上边距为参考标准，从元素上边和下边开始。

        // scrollxy
        console.log('----------------------元素的scroll------------------')
        console.log('scrollHeight' + dom1.scrollHeight); // 包含滚动区域的高度，包含元素padding的高度，但不包含border和margin的。
        console.log('scrollTop' + dom1.scrollTop); // 没办法获取到某个元素滚动了多少距离，如果一个容器是可滚动的，那么可以获取到容器内滚动了多少
        dom1.scrollTop = '100px';
        console.log('scrollLeft' + dom1.scrollLeft);
        console.log('scrollWidth' + dom1.scrollWidth);
        this.box3 = document.getElementsByClassName('box3')[0];
        console.log(this.box3.scrollTop);

        // console.log('元素的offset')
        console.log('----------------元素的offset-----------------------');
        console.log('offsetwidth:'  + dom1.offsetWidth); // 该容器的width +padding +border,为这个宽度值。那也就数说这个和boundingClientRecth获取的元素属性是一样的
        console.log('offsetHeight:' + dom1.offsetHeight);
        console.log('offsetTop:' + dom1.offsetTop);// 元素顶部到相对父元素的距离，如果没有相对的父元素，则是到body的, 比如说其父元素的position设置为relative
        console.log(dom3.offsetTop);

        //元素的clientWidth   clientHeight
        console.log('------------------元素的clientWidth--------------');
        console.log('-----------------元素的clientHeight--------------');
        console.log('clientWidth:' + dom1.clientWidth); // 这个属性只考虑width + padding属性， 不包含border
        console.log('clientHeight' + dom1.clientHeight);
        console.log('clientTop' + dom1.clientTop); // 等于border的宽度
        
        window.addEventListener('scroll', function (params) {
            var t, l;  
            if (document.documentElement && document.documentElement.scrollTop) {  
                t = document.documentElement.scrollTop;  
                l = document.documentElement.scrollLeft;
                console.log('走到这了')
            } else if (document.body) {  
                t = document.body.scrollTop;  
                l = document.body.scrollLeft;  
            }  
            else {  
                t = 0; l = 0;  
            }  
            // console.log(t);
        })
        dom1.addEventListener('scroll', function(e) {
            e.preventDefault();
            var t, l;
            if (dom1.documentElement && dom1.documentElement.scrollTop) {
                t = dom1.documentElement.scrollTop;
                l = dom1.documentElement.scrollLeft;
            } else {
                t = dom1.scrollTop;
                l = dom1.scrollLeft;
            }
            console.log(t);
        })
    },
    methods: {
        gotoTop() {
           document.documentElement.scrollTop = 0;

        }
    }

}
</script>

<style>
    .box-container {
        overflow: hidden;
        border: 1px solid;
    }
    
    .box1 {
        width: 200px;
        height: 200px;
        padding-bottom: 10px;
        padding-top: 10px;
        border:10px solid yellow;
        background-color: red;
        margin-top: 20px;
        overflow:scroll;
    }
    .box2 {
        margin-top: 20px;
        width: 200px;
        height: 200px;
        background-color: green;
    }
    .box3 {
        margin-top:200px;
        width: 200px;
        height: 200px;
        background-color: black;
    }
    .box3-container {
        position: relative;
    }
    .goto {
        width:30px;
        height: 30px;
        background-color:blue; 
    }

</style>
