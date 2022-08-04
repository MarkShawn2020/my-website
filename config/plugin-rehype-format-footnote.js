/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// customize plugin, ref: https://docusaurus.io/docs/markdown-features/plugins#creating-new-rehyperemark-plugins
// typedef, ref: https://github.com/unifiedjs/unified#example-10

const visit = require("unist-util-visit");

const handleGrandFatherOfFooterRef = (node) => {
    const PATTERN_FOOTNOTE_REF = '#fnref-'
    if (node.children.length > 0) {
        const lastChild = node.children[node.children.length - 1]
        // console.log({node, lastChild})

        if (lastChild.children /* Text */ &&  lastChild.children.length > 0) {
            const lastGrandChild = lastChild.children[lastChild.children.length - 1]
            if(!lastGrandChild){
                console.log({node, lastChild, lastGrandChild})
            }
            if (lastGrandChild.type === "element" && lastGrandChild.tagName === "a") {
                const {href, className} = lastGrandChild.properties
                if (className !== undefined && className[0] === 'footnote-backref') {
                    console.log({node, lastChild})
                    // 1. modify title
                    lastGrandChild.children[0].value = href.slice(PATTERN_FOOTNOTE_REF.length)
                    // 2. change position
                    const elementFooterRef = lastChild.children.pop()
                    node.children[0].unshift(elementFooterRef)
                }
            }
        }
    }
}

const pluginRehypeFormatFootnote = () =>
    (hast) => {
        visit(hast, 'element', handleGrandFatherOfFooterRef)
    }

module.exports = {pluginRehypeFormatFootnote}