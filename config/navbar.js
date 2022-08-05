/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {
    getGithubRepoUrl,
    getGithubRepoWebsiteUrl,
    getGithubRepoLibraryUrl
} = require("./utils");


const getNavbar = async () => (
    {
        title: '南川笔记',
        logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
        },
        items: [
            /**
             * left
             */
            {to: '/taskManager', label: 'My Tasks', position: 'left'},

            {
                to: '/blog/archive',
                label: 'My Blog',
                position: 'left'
            },

            {
                type: 'doc', // 加了这个就直接跳转到doc主页了，to就无效了
                // to: '/docs/SLAM/A01-findLights',
                docId: 'index',
                position: 'left',
                label: 'My Notes',
            },

            {to: '/gallery', label: 'Gallery', position: 'left'},


            /**
             * right
             */

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
    }
)

module.exports = {
    fetchNavbar: getNavbar
}