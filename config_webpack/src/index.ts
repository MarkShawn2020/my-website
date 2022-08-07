/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from "path";
import {promises as fs} from "fs";


import lightCodeTheme_ from 'prism-react-renderer/themes/github'
import darkCodeTheme_ from 'prism-react-renderer/themes/dracula'

import {fetchDocs} from './docs'
import {blog} from "./blog";
import fetchNavbar from "./theme/navbar";
import {me} from "./me";
import {asyncLoadGallery} from "./utils/asyncLoadGallery";
import genTasksMd2Json from "./utils/genTasksMd2Json";

import footer from "./theme/footer";

import charMap from './data/pinyin.json'

import type {Config} from '@docusaurus/types'


import type {PrismTheme} from "prism-react-renderer";


const lightCodeTheme: PrismTheme = lightCodeTheme_
const darkCodeTheme: PrismTheme = darkCodeTheme_

// const loaderPath = require.resolve('esbuild-loader')
// console.log({loaderPath});


// base on project
// const customCssFilePath = './src/css/theme.css'
// console.log({__dirname, customCssFilePath})

export const configCreatorAsync = async (): Promise<Config> => ({
  ...me,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': {
        charMap
      }
    }
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: await fetchDocs(),
        blog,

        theme: {
          // customCss: customCssFilePath,
        },

        // config google analytic 4 plugin (gtag), ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag
        gtag: {
          trackingID: 'G-QFQ00XLDNZ',
          anonymizeIP: true,
        },
      }
    ]
  ],

  themeConfig: {
    navbar: await fetchNavbar(),
    footer,
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  webpack: {
    // replaced babel with esbuild: https://github.com/facebook/docusaurus/issues/4765#issuecomment-841135926
    jsLoader: (isServer) => ({
      // loader: loaderPath,
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },

  customFields: {
    images: await asyncLoadGallery(),
    tasks: await genTasksMd2Json()
  },
});


(async () => {
  const s = await configCreatorAsync()
  const configOutputPath = path.join(__dirname, './tmp.json')
  await fs.writeFile(configOutputPath, JSON.stringify(s, null, 2))
  console.log(`DONE wrote config to file://${configOutputPath}`)
})()

export default configCreatorAsync
