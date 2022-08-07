/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// customize plugin, ref: https://docusaurus.io/docs/markdown-features/plugins#creating-new-rehyperemark-plugins
// typedef, ref: https://github.com/unifiedjs/unified#example-10

const visit = require("unist-util-visit");

// the footer_ref (finally rendered) pattern
const PATTERN_FOOTER_REF = '#fnref-'

const handleGrandFatherOfFooterRef = (node) => {
    if ((node.properties?.id || "").startsWith("fn-")) {
        for (const child of node.children ?? []) {
            for (const grandChild of child.children ?? []) {
                if (grandChild.properties?.href?.startsWith(PATTERN_FOOTER_REF)) {
                    // 1. modify title
                    grandChild.children[0].value = grandChild.properties.href.slice(PATTERN_FOOTER_REF.length)
                    // 2. change position
                    const elementFooterRef = child.children.pop()
                    node.children.splice(1, 0, elementFooterRef)
                    return;
                }
            }
        }
    }
}

const pluginRehypeCrossrefReformat = () => (hast) =>
    visit(hast, 'element', handleGrandFatherOfFooterRef)

module.exports = {pluginRehypeCrossrefReformat}
