/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {getGithubEditUrl} = require("./utils.js");


/** @type {import("@docusaurus/plugin-content-blog").PluginOptions} */
const blog = {
    path: 'library/blog/public',
    showReadingTime: true,
    editUrl: getGithubEditUrl(),
    blogDescription: 'A Docusaurus powered blog!',

    // enable all posts, otherwise default 5, ref: https://docusaurus.io/docs/blog#blog-sidebar
    blogSidebarTitle: 'All Posts',
    blogSidebarCount: 'ALL',
    postsPerPage: 5,
    exclude: [],

    blogArchiveComponent: '@theme/BlogArchivePage',
    blogListComponent: '@theme/BlogListPage',
    blogPostComponent: '@theme/BlogPostPage',
    blogTagsListComponent: '@theme/BlogTagsListPage',
    blogTagsPostsComponent: '@theme/BlogTagsPostsPage',

    truncateMarker: /.*^##/,
}

module.exports = {blog}