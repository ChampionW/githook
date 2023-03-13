import * as path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin')
var webpack = require('webpack');
console.log(process.env.myDev,'============')
const myDev:string = process.env.myDev;
module.exports = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].bundle.js',
        clean: true, // 在生成文件之前清空 output 目录
      },
      devServer: {
        open: true,
        port: 8080,
        client: {
          overlay: true, // 此处配置,当项目报错的时候，是否在客户端展示
        },
      },    
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.ts", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MinCssExtractPlugin.loader, // 将css代码从js文件当中抽离出来
                    },
                //   {
                //     loader: 'style-loader',
                //   },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                      modules: {
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                      },
                    },
                  },
                  {
                    loader: 'less-loader',
                  },
                  {
                    loader: "postcss-loader"
                  },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './template.html',
        }),
        new MinCssExtractPlugin({
            filename: "[name].champion.css",
            chunkFilename: "[id].dawei.css",
          }),
          new webpack.DefinePlugin({

            'react_app_env': JSON.stringify(myDev)

        })
    ],
};