/* eslint-disable */
"use strict";

let webpack = require("webpack"),
    path = require("path");

module.exports = {
    context: process.cwd(),
    entry: [ "./src/main.js" ],
    output: {
        filename: "bundle.js",
        path: process.cwd(),
        sourceMapFileName: "main.js.map",
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                include: [
                    path.resolve(process.cwd(), "src")
                ]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
