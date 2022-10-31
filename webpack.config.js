const path = require("path");

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        }
    }
}