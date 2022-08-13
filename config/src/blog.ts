/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {getGithubEditUrl} from "./utils/general";

import type {Options} from "@docusaurus/plugin-content-blog"
import {meCustom} from "./me";
import path from "path";

export const blog: Options= {
    path: path.join(meCustom.projectDocumentsPath, 'blog'),
    showReadingTime: true,
    editUrl: getGithubEditUrl(),
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
}

export default ({
    blog
})
