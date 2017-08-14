module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000
    }
};