const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].bundle.js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    hot: true, // * 貌似使用 webpack-dev-server 开启，自动有 hot 写不写都可以，如果没写其他热更新插件，保存则刷新这个页面且页面状态消失，如果家了其他热更新模块，例如 @pmmmwh/react-refresh-webpack-plugin，则只更新修改部分，页面状态保留。
    compress: true,
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@layout': path.resolve(__dirname, '../src/layout'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@fonts': path.resolve(__dirname, '../src/fonts'),
      '@examples': path.resolve(__dirname, '../src/examples'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            // ['@babel/preset-env', { corejs: 2, useBuiltIns: 'usage' }],
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            require.resolve('react-refresh/babel'), // * 热更新模块
            '@babel/plugin-transform-runtime', // * 开启可以 async await
          ],
          sourceMaps: 'inline',
          sourceType: 'module', // * 开启 async await 必须开启这个 https://babeljs.io/docs/en/options
        },
      },
      {
        test: /\.(css|scss|sass|less)$/,
        // * 排除业务模块，其他模块都不采用 css modules 方式解析
        exclude: [/src/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(css|scss|sass|less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]___[hash:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'img',
              publicPath: '/img',
            },
          },
        ],
      },
      {
        test: /\.(ttf)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              publicPath: '/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(), // * React 专用 热更新
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
      title: '自定义React配置',
    }),
    // * 用来检查代码错误，会启用 eslint ，eslint 配置在了 package.json 中
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
        exclude: ['./**/*.d.ts'],
      },
    }),
    // * 单独分离 css 文件。
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[hash:8].css',
    }),
  ],
};
