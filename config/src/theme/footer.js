"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footer = void 0;
exports.footer = {
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
};
exports.default = exports.footer;
