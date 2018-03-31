const { join, resolve } = require('path');

module.exports = {
    entry: ['./index.js'],
    context: resolve('src/ng1-app'),
    output: {
        filename: 'bundle.js',
        path: resolve('build')
    },
    devtool: 'source-map',
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'auto-ngtemplate-loader']
            },
            {
                test: /\.html$/,
                exclude: [
                    /node_modules/,
                    join(process.cwd(), 'src/index.html'),
                ],
                use: [
                    {
                        loader: 'ngtemplate-loader',
                        options: {
                            relativeTo: 'src/'
                        }
                    },
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    resolveLoader: {
        alias: {
            'auto-ngtemplate-loader': join(__dirname, './index.js')
        }
    },
    stats: {
        colors: true
    }
};
