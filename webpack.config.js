// webpack.config.js
var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: {
    site: './source/javascripts/site.js',
    'javascript-vue-01-wp': './source/javascripts/javascript-vue-01-wp.js',
    'javascript-vue-02-wp': './source/javascripts/javascript-vue-02-wp.js',
    'javascript-vue-03-wp': './source/javascripts/javascript-vue-03-wp.js',
    'javascript-vue-04-wp': './source/javascripts/javascript-vue-04-wp.js',
    'javascript-chapter-07-time-to-practice-components-wp': './source/javascripts/javascript-chapter-07-time-to-practice-components-wp.js',
    'javascript-ch08-communicate-components-wp': './source/javascripts/javascript-ch08-communicate-components-wp.js'
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
  
};
