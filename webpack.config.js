const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js'
    },
    ontput: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-toader'
            }
        ]
    },
    resolve: {
        extension: ['.ts', '.js', '.tsx', 'jsx']
    },
    devServer: {
        open: true
    },
    stats: {
        children: false,
    },
}