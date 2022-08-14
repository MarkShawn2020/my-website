/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from "path";

import pluginMdxMermaid from 'mdx-mermaid'
import pluginRemarkMath from 'remark-math'
import pluginRehypeKatex from 'rehype-katex'

import pluginRehypeCrossrefReformat
  from "./plugins/plugin-rehype-crossref-reformat"
import {getGithubEditUrl, getLatestVersion} from "./utils/general"

import {meCustom} from "./me";

import type {MDXPlugin} from "@docusaurus/mdx-loader";

import type {Options} from "@docusaurus/plugin-content-docs"

export const fetchDocs = async (): Promise<Options> =>
  (
    {
      remarkPlugins: [
        pluginMdxMermaid as MDXPlugin,
        pluginRemarkMath as MDXPlugin
      ],
      rehypePlugins: [
        pluginRehypeCrossrefReformat,
        pluginRehypeKatex as MDXPlugin,
      ],

      // default id is a must, although I want to use 'dev-notes'
      // id: 'default',
      path: path.join(meCustom.projectDocumentsPath, 'docs'), // By default, Docusaurus generates a sidebar from the docs folder structure, ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#sidebarPath
      // if enabled, the `editLocalizedFiles` would be invalid
      // sidebarPath: undefined,
      editUrl: getGithubEditUrl(), // enable local edit, ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#configuration
      editLocalizedFiles: true,
      editCurrentVersion: true, // configure version, ref: https://docusaurus.io/docs/versioning#configuring-versioning-behavior
      lastVersion: 'current', // must be in ['current', ...VALID_VERSIONS]
      versions: {
        current: {
          label: `${getLatestVersion()}+`, // path: versions[0] + "+"
          badge: true,
        },
      },
      onlyIncludeVersions: [
        "current"
      ],
      showLastUpdateTime: true,
    }
  )


export default ({
  fetchDocs
})
