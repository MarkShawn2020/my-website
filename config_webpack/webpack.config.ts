/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from "path"

// import MiniCssExtractPlugin from "mini-css-extract-plugin"

// uncomment it to let fs/path being compiled
import nodeExternals from 'webpack-node-externals'

// import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

import type {Configuration} from 'webpack/types'


const isProduction = process.env.NODE_ENV === "production";

const config: Configuration = {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      // target for tsconfig.json, ref: https://webpack.js.org/configuration/resolve/#resolvealias
      "@site": path.resolve(__dirname, "../"),
    }
  },
  entry: "./src/index.ts",
  output: {
    filename: 'docusaurus.config.webpack.js',
    path: path.resolve(__dirname, ".."),
    library: { // 这两个非常关键
      type: 'commonjs-module',
      export: 'default'
    }
  },
  target: 'node',             // must enable, otherwise can't resolve `fs|path`
  node: {
    __dirname: true          // /my-website/src/css/theme.css
  //   __dirname: false         // /my-website/css/theme.css (default)
  //   __dirname: 'eval-only'   // /my-website/css/theme.css
  },
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
