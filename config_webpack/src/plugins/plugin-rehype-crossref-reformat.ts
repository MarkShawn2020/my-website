/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// customize plugin, ref: https://docusaurus.io/docs/markdown-features/plugins#creating-new-rehyperemark-plugins
// typedef, ref: https://github.com/unifiedjs/unified#example-10

import {visit} from "unist-util-visit"

import type {Node} from 'unist'

import type {Element, Text} from 'hast'

// the footer_ref (finally rendered) pattern
const PATTERN_FOOTER_REF = '#fnref-'

const handleGrandFatherOfFooterRef = (node: Element) => {
  if ((node.properties?.id as string || "").startsWith("fn-")) {
    for (const child of node.children ?? []) {
      if (child.type === "element") {
        for (const grandChild of child.children) {
          if (grandChild.type === 'element') {
            const {href} = grandChild.properties
            if (typeof href === 'string') {
              if (href.startsWith(PATTERN_FOOTER_REF)) {
                // 1. modify title
                (grandChild.children[0] as Text).value = href.slice(PATTERN_FOOTER_REF.length)
                // 2. change position
                const elementFooterRef = child.children.pop()
                node.children.splice(1, 0, elementFooterRef)
                return;
              }
            }
          }
        }
      }
    }
  }
}

const pluginRehypeCrossrefReformat = () =>
  (hast: Node): void =>
    visit(hast, 'element', handleGrandFatherOfFooterRef)

export default pluginRehypeCrossrefReformat
