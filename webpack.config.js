var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {

    envFile(path.join(__dirname, "config/" + process.env.NODE_ENV + ".env"));

} catch (e) {
    console.log(e);
}

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery',
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),

        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            app: "app",
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Home: 'app/components/Home.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherNextForm: 'app/components/WeatherNextForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            WeatherNextMessage: 'app/components/WeatherNextMessage.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            Contact: 'app/components/Contact.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            applicationStyles: 'app/styles/app.scss',
            narutoPNG: 'app/images/unnamed.png',
            narutoJPG: 'app/images/naruto-shippuden-ultimate-ninja-storm-revolution-artwork.jpg'

        },

        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            }
            // {
            //     test: /\.(jpg|png)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[path][name].[hash].[ext]',
            //     }
            //}
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: process.env.NODE_ENV === "production" ? undefined : 'cheap-module-eval-source-map'
};