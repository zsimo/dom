"use strict";

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = function (env) {
    
    const IS_PROD = (env && env.production) ? true : false;
    const MODE = IS_PROD ? "production" : "development";

    var optimization = {};
    if (IS_PROD) {
        optimization.minimize = true;
    }
    
    return {
        mode: MODE,
        output: {
            path: path.resolve(__dirname, 'public'),
        },
        devtool: false,
        optimization: optimization,
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            compress: true,
            port: 9001
        },

        module: {
            
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                      "style-loader",
                      "css-loader",
                      "sass-loader"
                    ]
                  },
            ]
        
        },


        resolve: {
            modules: ['node_modules', __dirname]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin()
        ]
    }
};