const { resolve } = require('../util');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        test: /\.scss$/,
        include: [resolve('src')],
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [resolve('src/styles')]
                }
            }
        ]

    }
]