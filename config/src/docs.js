"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDocs = void 0;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const mdx_mermaid_1 = __importDefault(require("mdx-mermaid"));
const remark_math_1 = __importDefault(require("remark-math"));
const rehype_katex_1 = __importDefault(require("rehype-katex"));
const plugin_rehype_crossref_reformat_1 = __importDefault(require("./plugins/plugin-rehype-crossref-reformat"));
const general_1 = require("./utils/general");
const fetchDocs = async () => ({
    remarkPlugins: [
        mdx_mermaid_1.default,
        remark_math_1.default
    ],
    rehypePlugins: [
        plugin_rehype_crossref_reformat_1.default,
        rehype_katex_1.default,
    ],
    // default id is a must, although I want to use 'dev-notes'
    // id: 'default',
    path: 'library/docs/',
    // if enabled, the `editLocalizedFiles` would be invalid
    // sidebarPath: undefined,
    editUrl: (0, general_1.getGithubEditUrl)(),
    editLocalizedFiles: true,
    editCurrentVersion: true,
    lastVersion: 'current',
    versions: {
        current: {
            label: `${(0, general_1.getLatestVersion)()}+`,
            badge: true,
        },
    },
    onlyIncludeVersions: [
        "current"
    ],
    showLastUpdateTime: true,
});
exports.fetchDocs = fetchDocs;
exports.default = ({
    fetchDocs: exports.fetchDocs
});
