const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/, /\.mjs$/],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, 
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        limit: 500000,
                      }
                }
            ]
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.m?js/,
            resolve: {
                fullySpecified: false
            }
        },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            // hash: true,
            // filename: "index.html",  //target html
            template: "./src/index.html" //source html
        }),
        // new ExtractTextPlugin({ filename: 'css/style.css' })
    ]
}