const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.min.js'
    },

    devServer: {
        contentBase: __dirname + "/dist",
        compress: false,
        port: 8080,
    },

    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use:[{ loader: "ts-loader" }]
        }, {
            enforce: "pre",
            test:/\.js$/,
            loader: "source-map-loader"
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    //
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};