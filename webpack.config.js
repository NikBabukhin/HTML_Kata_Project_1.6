const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: '.src/',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}