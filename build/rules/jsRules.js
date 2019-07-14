const { resolve } = require('../util');
module.exports = [
    {
        test: '/\.vue$/',
        use: [
            {
                loader: 'vue-loader'
            }
        ]
    },
    {
        test: '/\.(jpg|png|jpeg|gif|bmp)$/',
        use: {
            loader: 'url-loader',
            options: {
                limit: 8000,
                name: "[hash:8]-[name].[ext]"
            }
        }
    }
]