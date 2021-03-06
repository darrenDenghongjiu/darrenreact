const path = require('path');
const webpack = require('webpack');


/*var path = require('path');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.join(__dirname, 'out'),
        publicPath: './out/',
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.(jpg|png)$/, loader: "url?limit=8192"}
        ]
    }
};*/

module.exports = {
	  //插件项
   // plugins: [commonsPlugin],
	//页面入口文件配置
	//这里先用的文件先加载
    entry: [
		path.join(__dirname, 'App/outfun.js'),
        path.join(__dirname, 'App/App.jsx'),
    ],
	 //入口文件输出配置
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
	//其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss','.png', '.jpg']
    },
    resolveLoader: {root: path.join(__dirname, 'node_modules')},
	//加载器配置
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
				exclude: /node_modules/,
                loader: 'babel'
            },
			//可以加入less 或者scss文件
            {
                test: /\.css$/,
				//exclude: /node_modules/,
                loader: 'style!css'
            },
			{
				test: /\.scss$/,
				loader: "style!css!sass",
				exclude: /node_modules/
			},
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: 'file-loader'
            }
        ]
    },



    babel: {
        presets: ['es2015', 'react'],
        compact: false
    },
	/*
    plugins: [
         new webpack.optimize.UnlifyJsPlugin({
             compress: {warnings: false}
        }),
         new webpack.DefinePlugin({
             'process.env': {
                 'NODE_ENV': JSON.stringify('production')
           }
         })
     ],
	
	plugins: ["transform-react-constant-elements"] ,
	*/
    devtool: 'source-map'
};