// const a = '2';
// export {a}


/**
 * 模块化，目前前端主要使用commonJS, es6的模块化方式
 * 1. commonjs
 *  通过这个module.exports把模块内的函数暴露出去
 *  exports则是内置的另外一个全局变量，exports = module.exports
 *  如果想通过exports暴露内容给外部，则不能改变exports的指向，只能在exports上添加，它是模块的引用
 *  exports是在一开始由module.exports赋值的，所以如果exports上挂载了要对外暴露的接口和属性，那么后面一旦module.exports改变了指向，那么exports上挂载的将丢失
 *  
 * 
 *  es6导出的模块对象中含有__esModule对象，而es5则没有
 */
// exports.show = function() {
//     console.log('exports.show');
// }

// exports.number = 12;

// 第一种情况，不管exports怎么折腾，最后决定是否导出什么内容的是module.exports,搞清楚两者的关系就行。
// exports = module.export
// module.export内容暴露出去
// module.exports = {
//     display: function() {

//     }
// }

// 第二种情况，我不改变module.exports，exports自己作，我不在默认的对象上挂载，我换个人，看看
exports = {
  show:function() {

  }  
}
// 打印出的是一个空对象 {}， 说明没有暴露出去
module.exports.display = function() {
    console.log("display");
}

module.exports = function() {
    console.log("zhijie display")
}
// 这个时候暴露出去的是display

// 第三个问题，如何引用，一直疑问的是导出的是一个文件模块，这个该怎么理解。模块就是对象
// 如果把某个接口或者属性挂载在module.exports上，那么这个模块就是一个对象，引用的时候拿到的是一个对象，通过这个对象获取那个模块暴露出去的东西
// 如果把module.exports直接指向了非object,比如一个常量，或者一个函数，那么引用的时候直接拿到的是常量或者函数

// 总结commonjs
/**
 * 1. 如果通过exports暴露，那么一定不要改变exports的指向，全部挂载到exports上，那么引用的时候就拿到一个对象
 * 2. 如果exports和module.exports都生效，那么两者最好都不要改变指向，否则，modulex.exports改变导致exports失效，module.exports改变指向之前的也失效，最终生效的是module.exports指向的那坨东西
 * 3. module.exports默认导出的是一个对象，如果改变指向，那么直接指向改变后的那个，引用出来的也要根据module.export指向的决定，导出的是一个函数，引用的时候则可以直接调用
 */
