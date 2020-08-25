const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const isProd = process.env.NODE_ENV === 'production'

function setDevTool() {
    if (!isProd) {
        return 'inline-source-map'
    } else {
        return 'source-map'
    }
}

const getStyleLoaders = () => {
    return [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader'
    ];
};

const config = {
    mode: isProd ? 'production': 'development',
    entry: "./src/index.js",
    output: {
        filename: isProd ? '[hash].js' : undefined
    },
    devtool: setDevTool(),
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name]-[sha1:hash:7].[ext]'
                    }
                }]
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /.(sass|scss)$/,
                use: [...getStyleLoaders(), "sass-loader"]
            },
            {
                test: /\.css$/,
                use: getStyleLoaders()
            }
        ]
    },
    devServer: {
        open: true
    }
}

if (isProd) {
    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname + '/assets')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[hash].css'
        })
    );
};

module.exports = config