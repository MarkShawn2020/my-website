"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchNavbar = void 0;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const general_1 = require("../utils/general");
const fetchNavbar = async () => ({
    hideOnScroll: false,
    title: '南川笔记',
    logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
    },
    items: [
        /**
         * left
         */
        { to: '/taskManager', label: 'My Tasks', position: 'left' },
        {
            to: '/blog/archive',
            label: 'My Blog',
            position: 'left'
        },
        {
            type: 'doc',
            // to: '/docs/SLAM/A01-findLights',
            docId: 'index',
            position: 'left',
            label: 'My Notes',
        },
        { to: '/gallery', label: 'Gallery', position: 'left' },
        /**
         * right
         */
        {
            href: (0, general_1.getGithubRepoUrl)(),
            label: 'Code of Framework',
            position: 'right',
        },
        {
            href: (0, general_1.getGithubRepoWebsiteUrl)(),
            label: 'Code of Website',
            position: 'right',
        },
        {
            href: (0, general_1.getGithubRepoLibraryUrl)(),
            label: 'Library',
            position: 'right',
        },
    ],
});
exports.fetchNavbar = fetchNavbar;
exports.default = exports.fetchNavbar;
