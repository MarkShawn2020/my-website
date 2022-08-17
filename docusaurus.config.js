/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


require("tsconfig-paths").register({
  baseUrl: "./",
  paths: require("./tsconfig.json").compilerOptions.paths,
});

require('ts-node').register({
  scope: true,
  scopeDir: __dirname,
  swc: true,
  transpileOnly: true,
});

module.exports = require('./config/src/index.ts');
