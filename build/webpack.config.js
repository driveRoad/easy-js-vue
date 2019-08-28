const path = require('path');
const { resolve } = require('./util');
const jsRules = require('./rules/jsRules');
const styleRules = require('./rules/styleRules');
const plugins = require('./plugin');

const webpacBaseConfig = {
    mode: 'development',
    entry: {
        app: resolve('src/index.vue'),
    },
    output: {
        filename: '[name].js',
        path: resolve('dist'),
        
    },
   
    module: {
        rules: [
            ...jsRules, ...styleRules
        ]
    },
    plugins: [...plugins],
    resolve: {
        extensions: ['.js','.jsx', '.vue'],
        alias: {
            "@components": resolve('src/components'),
            "vue$": "vue/dist/vue.js"
            
        }
    }

};

module.exports = webpacBaseConfig;