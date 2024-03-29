'use strict'

const WebPack = require('webpack')
const DefinePlugin = WebPack.DefinePlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Config = require('../../config')
const resolvePath = require('../../config/utils').resolvePath

const additionalPlugins = []

module.exports = ({ start = [], end = [] }) =>
  [
    new DefinePlugin(Config.envsAsString),
    ...start,
    ...additionalPlugins,
    new CopyWebpackPlugin({
      patterns: [
        {
          force: true,
          from: resolvePath('src/manifest.json'),
          to: Config.paths.buildDestination,
          transform: function (content, path) {
            return Buffer.from(
              JSON.stringify({
                ...JSON.parse(content.toString()),
              }),
            )
          },
        },
        {
          force: true,
          from: resolvePath('src/robots.txt'),
          to: Config.paths.buildDestination,
        },
      ],
    }),
    ...end,
  ].filter(plugin => plugin)
