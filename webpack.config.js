const path = require('path');
module.exports = {
    context: __dirname + "/build",
    entry: {
        index: './src/index'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.html/, loader: 'html-loader?attrs=false' }
        ]
    },
    resolve: {
        root: path.resolve('./')
    }
}