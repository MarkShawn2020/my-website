/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const pluginMdxMermaid = require("mdx-mermaid");
const pluginRemarkMath = require("remark-math");
const pluginRehypeKatex = require("rehype-katex");

const {pluginRehypeCrossrefReformat} = require("./plugin-rehype-crossref-reformat");
const {getGithubEditUrl, getLatestVersion} = require("./utils");


const fetchDocs = async () =>
    /** @type {import("@docusaurus/plugin-content-docs").PluginOptions} */
     (
        {

            // default id is a must, although I want to use 'dev-notes'
            // id: 'default',
            path: 'library/docs/', // By default, Docusaurus generates a sidebar from the docs folder structure, ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#sidebarPath
            // if enabled, the `editLocalizedFiles` would be invalid
            // sidebarPath: undefined,
            editUrl: getGithubEditUrl(), // enable local edit, ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#configuration
            editLocalizedFiles: true,
            editCurrentVersion: true, // configure version, ref: https://docusaurus.io/docs/versioning#configuring-versioning-behavior
            lastVersion: 'current', // must be in ['current', ...VALID_VERSIONS]
            versions: {
                current: {
                    // todo: investigate why await can be used here
                    label: `${await getLatestVersion()}+`, // path: versions[0] + "+"
                    badge: true,
                },
            },
            onlyIncludeVersions: [
                "current"
            ],
            showLastUpdateTime: true,

            remarkPlugins: [pluginMdxMermaid, pluginRemarkMath],
            rehypePlugins: [
                pluginRehypeCrossrefReformat,
                pluginRehypeKatex,
            ],
        }
    )


module.exports = {fetchDocs}
