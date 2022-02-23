const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  devtool: 'eval-source-map',
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
    hot: true,
    compress: true,
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@layout': path.resolve(__dirname, '../src/layout'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@fonts': path.resolve(__dirname, '../src/fonts'),
      '@ming': path.resolve(__dirname, '../src/mingming'),
    },
    extensions: ['.js', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          sourceMaps: 'inline',
        },
      },
      {
        test: /\.css$/,
        // * 排除业务模块，其他模块都不采用 css modules 方式解析
        exclude: [/src/],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(css|scss|sass|less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // loader: 'style-loader',
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
      title: '自定义React配置',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[hash:8].css',
    }),
    new BundleAnalyzerPlugin(),
  ],
};
