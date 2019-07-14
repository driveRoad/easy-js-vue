const path = require('path');
const { resolve } = require('./util');
const jsRules = require('./rules/jsRules');
const styleRules = require('./rules/styleRules');
const plugins = require('./plugin');

const webpacBaseConfig = {
    mode: 'development',
    entry: {
        app: resolve('src/index.js'),
    },
    output: {
        filename: '[name].js',
        path: resolve('dist'),
    },
    plugins: [...plugins],
    module: {
        rules: [
            ...jsRules, ...styleRules
        ]
    },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            "@components": resolve('src/components'),
            "vue$": "vue/dist/vue.esm.js"
            
        }
    }

};

module.exports = webpacBaseConfig;