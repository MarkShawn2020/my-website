/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type {Footer} from "@docusaurus/theme-common";

export const footer: Footer = {
  style: 'dark',
  links: [
    /**
     * footer 1
     */
    {
      title: 'Core',
      items: [
        {
          label: 'Docs',
          to: '/docs',
        },
        {
          label: 'Blog',
          to: '/blog/archive',
        },
      ],
    },

    /**
     * footer 2
     */

    {
      title: 'Docusaurus',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/facebook/docusaurus',
        },
        {
          label: 'Documentation',
          href: 'https://docusaurus.io/docs/category/guides',
        },
        {
          label: "Case: Joshua Chen",
          href: 'https://joshcena.com/'
        }
      ],
    },

    {
      title: "Tools",
      items: [
        {
          label: "Vercel Deploy",
          href: "https://vercel.com/markshawn2020/docusaurus/deployments"
        },
        {
          label: "Google Analytics",
          href: "https://analytics.google.com/analytics/web/#/p324822374/reports/reportinghub?params=_u.dateOption%3DthisWeekSatToToday"
        },
        {
          label: "AWS EC2 Monitor (VPN)",
          href: "https://ap-east-1.console.aws.amazon.com/ec2/home?region=ap-east-1#InstanceDetails:instanceId=i-02fffe2800e2025e1"
        }
      ]
    },

    /**
     * footer 3
     */
    {
      title: 'Community',
      items: [
        {
          label: 'Stack Overflow',
          href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        },
        {
          label: 'Discord',
          href: 'https://discordapp.com/invite/docusaurus',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/docusaurus',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
}

export default footer

