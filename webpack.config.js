const path = require("path");

module.exports = {
    entry: './public/index.js',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        }
    }
}