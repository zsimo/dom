"use strict";

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var paths = {
    src: path.resolve(__dirname, "src"),
    pages: path.resolve(__dirname, "src", "pages"),
    public: path.resolve(__dirname, "public")
};

module.exports = function (env) {
    
    const IS_PROD = (env && env.production) ? true : false;
    const MODE = IS_PROD ? "production" : "development";

    var optimization = {};
    if (IS_PROD) {
        optimization.minimize = true;
    }
    
    return {
        mode: MODE,
        entry: {
            index: [
                path.resolve(paths.pages, "index", "index.js"),
                path.resolve(paths.pages, "index", "style", "index.scss"),
            ]
        },
        output: {
            path: paths.public,
        },
        devtool: false,
        optimization: optimization,
        devServer: {
            contentBase: paths.public,
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
                    /** 
                      "style-loader",
                      "css-loader",
                      "sass-loader"
                      */
                      MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                    ]
                  },
            ]
        
        },


        resolve: {
            modules: ['node_modules', __dirname]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name]_[contenthash].css"
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(paths.src, "html.ejs"),
                chunks: ["index"],
                filename: path.resolve(paths.public, "index.html")          
            })
        ]
    }
};