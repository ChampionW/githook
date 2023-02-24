import * as path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].bundle.js',
        clean: true, // 在生成文件之前清空 output 目录
      },
      devServer: {
        open: true,
        port: 8080,
        client: {
          overlay: true,
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
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './template.html',
        })
    ],
};