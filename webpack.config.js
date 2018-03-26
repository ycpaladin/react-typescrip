const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
// const lesslessToJs = require('less-vars-to-js');

// // 获取自己定义的要覆盖antd默认样式的文件
// const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/assets/style/themes.less'), 'utf8'));

console.log('===============================', process.env.NODE_ENV);

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "cheap-moudle-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        port: 8003,
        hot: true,
        // historyApiFallback: true,
        historyApiFallback: {
            index: '/index.html'
        },
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by
            // 'awesome-typescript-loader'.
            {
                test: /\.(tsx|ts)?$/,
                use: [{
                    loader: 'babel-loader'
                }, {
                    loader: 'ts-loader'
                }]
            },

            // All output '.js' files will have any sourcemaps re-processed by
            // 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    // options: {
                    //     modifyVars: themeVariables
                    // }
                }]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }

                ]
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/'
                })
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=8192&name=[name].[ext]&publicPath='
            }
        ]
    },
    // When importing a module whose path matches one of the following, just assume
    // a corresponding global variable exists and use that instead. This is
    // important because it allows us to avoid bundling all of our dependencies,
    // which allows browsers to cache those libraries between builds.
    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            title: 'hello ts&react',
            // chunks: ['vendors', 'app'],
            inject: 'body',
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true
            // },
            chunksSortMode: 'dependency'
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};