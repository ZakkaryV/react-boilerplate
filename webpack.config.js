
// HtmlWebpackPlugin is a plugin for wepback. 
// the config takes three things: template which is an html file
// to use as a base, filename: which is the output html file, and 
// inject, which DOM element to inject the script.

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {

// 1. tell webpack the entry point of the app
//    the reason entry takes an array rather than a string
//    for the starting point is that it can accept multiple
//    points of entry. If you only have one entry point you can 
//    actually pass it a string instead. 

    entry: [
        './app/index.js'
    ],

// 2. tell weback which transformations to run 

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },

// 3. specify first the name of the output file, and then with path: 
//    the directory to put the file in. in this case we are creating a new directory

    output: {
        filename: "index_bundle.js",
        path: __dirname + '/dist'
    },
    plugins: [HTMLWebpackPluginConfig]
}