var path = require('path')
var webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
	filename: 'js/[name].js'
  },
  plugins: [
		new CleanWebpackPlugin(
            ['dist/main.*.js','dist/*.js','dist/css/*.*',],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        ),
		new htmlWebpackPlugin({
			filename: 'index.html', //指定文件名字
			template: 'index.html', //关联打包模版index.html
			inject: "head" //指定.js文件打包后放置的位置
			//		,
			//		minify: { // 压缩代码
			//              removeComments: true, // 删除注释
			//              collapseWhitespace: true // 删除空格
			//          }
		})
		
	],
	module: {
		loaders: [
			
			{
				test: /\.jsx?$/,
				exclude: __dirname + '/node_modules/', //排除这个文件，加快速度
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			},
			{
			test:/\.tpl$/,
			loader:'ejs-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('postcss-import'),
								require('autoprefixer')
							]
						}
					}
				]
			},

			{
				test: /\.less$/,
				loader: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')()
							]
						}
					},
					'less-loader'
				]
			},
			{
				// 加入html-loader处理html文件
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				// 加入file-loader处理图片文件
				test: /\.(jpe?g|png|gif|svg)/i,
				use: [{
						loader: 'file-loader',
						options: {
							name: 'assets/[name]-[hash:6].[ext]'
						}
					},
					{
						// 加入image-webpack-loader压缩图片
						loader: 'image-webpack-loader'
					}
				]
			}
		]
	}
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
