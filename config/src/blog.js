"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.blog = void 0;
const general_1 = require("./utils/general");
exports.blog = {
    path: 'library/blog/public',
    showReadingTime: true,
    editUrl: (0, general_1.getGithubEditUrl)(),
    blogDescription: 'A Docusaurus powered blog!',
    // enable all posts, otherwise default 5, ref: https://docusaurus.io/docs/blog#blog-sidebar
    blogSidebarTitle: 'All Posts',
    blogSidebarCount: 'ALL',
    postsPerPage: 5,
    exclude: [],
    blogListComponent: '@theme/BlogListPage',
    blogPostComponent: '@theme/BlogPostPage',
    blogTagsListComponent: '@theme/BlogTagsListPage',
    blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
    truncateMarker: /.*^##/,
};
exports.default = ({
    blog: exports.blog
});
