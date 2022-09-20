'use strict'

require('dotenv').config()

const Base = require('./webpack-base')
const Webpack = require('webpack')
const HotModuleReplacementPlugin = Webpack.HotModuleReplacementPlugin
const WebpackManifestPlugin = require('webpack-manifest-plugin').WebpackManifestPlugin
const Merge = require('webpack-merge').merge
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Config = require('../../config')
const Plugins = require('./webpack-plugins')

const { paths } = Config

module.exports = Merge(Base, {
  mode: 'development',
  devtool: 'source-map',
  bail: false,

  devServer: {
    hot: false,
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    client: {
      overlay: {
        errors: false,
        warnings: false,
      },
      progress: false,
    },
    open: false,
  },

  watchOptions: {
    ignored: ['.github', '.yarn', 'deployments', 'dist', 'docs', 'test', 'tools', '**/node_modules'],
  },

  output: {
    path: paths.buildDestination,
    pathinfo: false,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    clean: true,
  },

  plugins: Plugins({
    start: [
      new HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        inject: true,
        template: paths.indexHTML,
        templateParameters: () => Config.vars,
      }),
    ],
    end: [new WebpackManifestPlugin({ fileName: 'asset-manifest.json', publicPath: Config.publicPath })],
  }),
})
