const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production';
const cssDev=['style-loader','css-loader','sass-loader'];
const cssProd= ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader","sass-loader"],
    publicPath:'../'
})

const cssConfig =isProd ? cssProd :cssDev;
module.exports={
    entry:{
        index:'./views/index.js',
    },
    output:{
        path:__dirname+'/public',
        filename:'[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015']
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: cssConfig
            },

            {
                test: /\.(gif|png|jpg|svg)$/i,
                use:[
                    {
                        loader: 'file-loader?name=[name].[ext]&outputPath=images/',
                    }
                    ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        hot:true,
        port:9000,
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title:'Qunitype Task',
                minify:{
                    collapseWhitespace:true
                },
                template:'./views/index.html'
            }
        ),
        new ExtractTextPlugin({
            filename:"./css/[name].css",
            disable:!isProd,
            allChunks:true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};