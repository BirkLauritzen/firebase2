const path = require('path');

module.exports = {
    entry: './src/fetch-collection.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};