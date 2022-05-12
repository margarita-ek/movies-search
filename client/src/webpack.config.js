const path = require('path')
const tsNameof = require('ts-nameof')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ESLintPlugin = require('eslint-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'), 
    mode: 'development',
    entry: {
        main: './index.js'
    },
    // devServer: {
    //     // contentBase: path.join(__dirname, 'src'),
    //     port: 3000,
    //     open: true,
    //     liveReload: true,
    //     hot: false
    // },
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: '../public/index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, '../public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        // new ESLintPlugin(options)
    ],
    module: {
        rules: [
            // {
            //     test: /\.m?js$/,
            //     exclude: /node_modules/,
            //     use: {
            //     loader: "babel-loader",
            //     options: {
            //         presets: [
            //             '@babel/preset-env']
            //         }
            //     }                
            // },
            // {
            //     test: /\.m?jsx$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: [
            //                 '@babel/preset-env',
            //                 '@babel/preset-react']
            //         }
            //     }                
            // },            
            // {
            //     test: /\.m?ts$/,
            //     exclude: /node_modules/,
            //     use: {
            //     loader: "babel-loader",
            //     options: {
            //         presets: [
            //             '@babel/preset-env',
            //             '@babel/preset-typescript']
            //         }
            //     }                
            // },
            // {
            //     test: /\.tsx?$/,
            //     use: [{
            //         loader: 'ts-loader',
            //         options: {
            //             getCustomTransformers: () => ({ before: [tsNameof] }),
            //         },
            //     }],
            //     exclude: /node_modules/,
            // },            
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {

                    }
                },
                    'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {

                    }
                },
                    'css-loader',
                    'sass-loader'
                ]
            },            
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource'
            },          
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                type: 'asset/resource'
            },
            // {
            //     test: /\.xml$/,
            //     use: ['xml-loader']
            // },          
            // {
            //     test: /\.csv$/,
            //     use: ['csv-loader']
            // }
        ]
    }
}

