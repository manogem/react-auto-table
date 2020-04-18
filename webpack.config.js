var path = require("path");

module.exports = {
    mode: "production",
    entry: {
        'index': './src/index.tsx',
        'index.min': './src/index.tsx'
    },
    output: {
        path: path.resolve('build'),
        filename: '[name].js',
        libraryTarget: 'commonjs',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                query: {
                    declaration: false,
                }
            }
        ]
    },
    externals: {
        react: "react"
    }
};

