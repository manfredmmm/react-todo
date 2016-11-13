module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint'] },
            { test: /\.css$/,
              loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
            }
        ]
    }
};
