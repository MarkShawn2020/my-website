/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


const charMap = require('./config/data/pinyin.json');

const {me} = require('./config/me');
const {
    asyncLoadGallery,
    getGithubRepoUrl,
    getGithubRepoWebsiteUrl,
    getGithubRepoLibraryUrl,
} = require('./config/utils');
const {blog} = require("./config/blog");
const {fetchDocs} = require("./config/docs");

const config = async function configCreatorAsync() {
    /** @type {import('@docusaurus/types').Config} */
    return {
        ...me, // suggested by https://markshawn2020.github.io/keeps-learning/

        baseUrl: '/',

        onBrokenLinks: 'throw',

        onBrokenMarkdownLinks: 'warn',

        favicon: 'img/favicon.ico',

        i18n: {
            defaultLocale: 'zh-Hans',
            locales: ['zh-Hans'],
            localeConfigs: {
                'zh-Hans': {
                    charMap,
                },
            },
        },

        presets: [
            [
                '@docusaurus/preset-classic',
                /** @type {import("@docusaurus/preset-classic").PluginOptions} */
                {
                    docs: await fetchDocs(),

                    blog,

                    theme: {
                        customCss: './config/css/theme.css',
                    },

                    // config google analytic 4 plugin (gtag), ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag
                    gtag: {
                        trackingID: 'G-QFQ00XLDNZ',
                        anonymizeIP: true,
                    },

                    // enabled production debug, ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-debug#ex-config
                    // debug: true
                },
            ],
        ],

        themeConfig: {
            navbar: {
                title: '南川笔记',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    // must consist with the project under config
                    // {
                    //     type: 'doc',
                    //     docId: 'books',
                    //     position: 'left',
                    //     label: 'My Books'
                    // },
                    {to: '/blog/archive', label: 'My Blog', position: 'left'},

                    {
                        type: 'doc', // 加了这个就直接跳转到doc主页了，to就无效了
                        // to: '/docs/SLAM/A01-findLights',
                        docId: 'index',
                        position: 'left',
                        label: 'My Notes',
                    },

                    {to: '/gallery', label: 'Gallery', position: 'left'},

                    {
                        href: getGithubRepoUrl(),
                        label: 'Code of Framework',
                        position: 'right',
                    },
                    {
                        href: getGithubRepoWebsiteUrl(),
                        label: 'Code of Website',
                        position: 'right',
                    },
                    {
                        href: getGithubRepoLibraryUrl(),
                        label: 'Library',
                        position: 'right',
                    },
                ],
            },

            footer: {
                style: 'dark',
                links: [
                    /**
                     * footer 1
                     */
                    {
                        title: 'Core',
                        items: [
                            {
                                label: 'Docs',
                                to: '/docs',
                            },
                            {
                                label: 'Blog',
                                to: '/blog/archive',
                            },
                        ],
                    },

                    /**
                     * footer 2
                     */

                    {
                        title: 'Docusaurus',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                            {
                                label: 'Documentation',
                                href: 'https://docusaurus.io/docs/category/guides',
                            },
                        ],
                    },

                    {
                        title: "Tools",
                        items: [
                            {
                                label: "Vercel Deploy",
                                href: "https://vercel.com/markshawn2020/docusaurus/deployments"
                            },
                            {
                                label: "Google Analytics",
                                href: "https://analytics.google.com/analytics/web/#/p324822374/reports/reportinghub?params=_u.dateOption%3DthisWeekSatToToday"
                            }
                        ]
                    },

                    /**
                     * footer 3
                     */
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },

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
                loader: require.resolve('esbuild-loader'),
                options: {
                    loader: 'tsx',
                    format: isServer ? 'cjs' : undefined,
                    target: isServer ? 'node12' : 'es2017',
                },
            }),
        },

        customFields: {
            images: await asyncLoadGallery(),
        },
    };
};

module.exports = config;
