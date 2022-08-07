"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configCreatorAsync = void 0;
const github_1 = __importDefault(require("prism-react-renderer/themes/github"));
const dracula_1 = __importDefault(require("prism-react-renderer/themes/dracula"));
const pinyin_json_1 = __importDefault(require("./data/pinyin.json"));
const docs_1 = require("./docs");
const blog_1 = require("./blog");
const navbar_1 = __importDefault(require("./theme/navbar"));
const me_1 = require("./me");
const asyncLoadGallery_1 = require("./utils/asyncLoadGallery");
const genTasksMd2Json_1 = __importDefault(require("./utils/genTasksMd2Json"));
const footer_1 = __importDefault(require("./theme/footer"));
const lightCodeTheme = github_1.default;
const darkCodeTheme = dracula_1.default;
const loaderPath = require.resolve('esbuild-loader');
console.log({ loaderPath });
// base on project
const customCssPath = 'src/css/theme.css';
console.log({ customCssPath });
const configCreatorAsync = async () => ({
    ...me_1.me,
    baseUrl: '/',
    favicon: '/img/favicon.ico',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
        localeConfigs: {
            'zh-Hans': {
                charMap: pinyin_json_1.default
            }
        }
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: await (0, docs_1.fetchDocs)(),
                blog: blog_1.blog,
                theme: {
                    customCss: customCssPath,
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
        navbar: await (0, navbar_1.default)(),
        footer: footer_1.default,
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
    webpack: {
        // replaced babel with esbuild: https://github.com/facebook/docusaurus/issues/4765#issuecomment-841135926
        jsLoader: (isServer) => ({
            loader: loaderPath,
            options: {
                loader: 'tsx',
                format: isServer ? 'cjs' : undefined,
                target: isServer ? 'node12' : 'es2017',
            },
        }),
    },
    customFields: {
        images: await (0, asyncLoadGallery_1.asyncLoadGallery)(),
        tasks: await (0, genTasksMd2Json_1.default)()
    },
});
exports.configCreatorAsync = configCreatorAsync;
module.exports = exports.configCreatorAsync;
