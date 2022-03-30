const webpack = require('webpack')
const path = require('path')

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'commons.js'
})

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js'
        //admin: './admin.js'
    },
    output: {
        path: path.resolve(__dirname+'/public/js', 'dist'),
        filename: '[name].bundle.js'
    },
    module: {

    },
    plugins: [
        extractCommons
    ]
}


module.exports = config