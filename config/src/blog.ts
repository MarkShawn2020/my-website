/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from "path";

import { getGithubEditUrl } from "./utils/general";

import { meCustom } from "./me";

import type { Options } from "@docusaurus/plugin-content-blog"

export const blog: Options = {
    path: path.join(meCustom.projectDocumentsPath, 'blog'),
    showReadingTime: true,
    editUrl: getGithubEditUrl(),
    blogDescription: 'A Docusaurus powered blog!',

    // enable all posts, otherwise default 5, ref: https://docusaurus.io/docs/blog#blog-sidebar
    blogSidebarTitle: 'All Posts',
    blogSidebarCount: 'ALL',
    postsPerPage: 5,
    exclude: [
      '**/fbInternal/**',


     '**/_*.{js,jsx,ts,tsx,md,mdx}',
     '**/_*/**',
     '**/*.test.{js,jsx,ts,tsx}',
     '**/__tests__/**',
   ],

    blogListComponent: '@theme/BlogListPage',
    blogPostComponent: '@theme/BlogPostPage',
    blogTagsListComponent: '@theme/BlogTagsListPage',
    blogTagsPostsComponent: '@theme/BlogTagsPostsPage',

    truncateMarker: /.*^##/,

    sortPosts: "descending"
}

export default ({
    blog
})
