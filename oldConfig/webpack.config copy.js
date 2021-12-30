// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// // const ESlintPlugin = require('eslint-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// // const CopyPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// // const proConfig = require('./webpack.production');
// // const querystring = require('./querystring');
// // const isDevelopment = querystring(process.argv.slice(2), '--mode', 'development');
// // console.log(isDevelopment);

// module.exports = {
//   entry: path.resolve(__dirname, './src/index.js'),
//   devtool: 'source-map',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'js/[name].bundle.js',
//     publicPath: '/',
//   },
//   optimization: {
//     splitChunks: {
//       chunks: 'all',
//     },
//   },
//   devServer: {
//     hot: true,
//     compress: true,
//     port: 3000,
//     open: true,
//   },
//   resolve: {
//     alias: {
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@utils': path.resolve(__dirname, 'src/utils'),
//       '@pages': path.resolve(__dirname, 'src/pages'),
//       '@layout': path.resolve(__dirname, 'src/layout'),
//       '@assets': path.resolve(__dirname, 'src/assets'),
//       '@ming': path.resolve(__dirname, 'src/mingming'),
//     },
//     extensions: ['.js', '.jsx', '.tsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|mjs|jsx|ts|tsx)$/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
//           sourceMaps: 'inline',
//         },
//       },
//       {
//         test: /\.css$/,
//         // * 排除业务模块，其他模块都不采用 css modules 方式解析
//         exclude: [/src/],
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(css|scss|sass|less)$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               sourceMap: true,
//               importLoaders: 2,
//               modules: {
//                 mode: 'local',
//                 localIdentName: '[name]__[local]___[hash:5]',
//               },
//             },
//           },
//           {
//             loader: 'postcss-loader',
//             options: {
//               postcssOptions: {
//                 plugins: ['postcss-preset-env'],
//               },
//             },
//           },
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.(svg|png|jpe?g|gif)/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192,
//               outputPath: "img",
//               publicPath: "/img"
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, './public/index.html'),
//       inject: 'body',
//       title: '自定义React配置',
//     }),
//     // new ESlintPlugin({
//     //   context: path.resolve(__dirname, './src'),
//     //   extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
//     //   exclude: 'node_modules',
//     //   eslintPath: require.resolve('eslint'),
//     // }),
//     // * 用来检查代码错误，会启用 eslint ，eslint 配置在了 package.json 中
//     new ForkTsCheckerWebpackPlugin({
//       eslint: {
//         files: './src/**/*.{ts,tsx,js,jsx}',
//       },
//     }),
//     // new CopyPlugin({
//     //   patterns: [{ from: path.resolve(__dirname, './src/assets'), to: 'assets' }],
//     // }),
//     // * 分离 css 到指定目录
//     new MiniCssExtractPlugin({
//       filename: 'css/[name].[hash:8].css',
//       chunkFilename: 'css/[name].[hash:8].css',
//     }),
//   ],
// };
