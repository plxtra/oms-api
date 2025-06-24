// @ts-check
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const canonicalHost = 'plxtra.org';
export const canonicalSite = `https://${canonicalHost}`;

export const githubHost = 'plxtra.github.io';

// https://astro.build/config
export default defineConfig({
    site: canonicalSite,
	base: '/oms-api/',

	trailingSlash: 'always',

	integrations: [
        sitemap({
            // Change sitemap URLs to use custom host supplied to GitHub.
            serialize(item) {
                const url = new URL(item.url);
                if (url.host === githubHost) {
                    url.host = canonicalHost;
                }
                item.url = url.href;
                return item;
            },
        }),

		starlight({
			title: 'Order Management System APIs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/plxtra/' },
				{ icon: 'zulip', label: 'Chat groups', href: 'https://plxtra.zulipchat.com/' },
				{ icon: 'open-book', label: 'Plxtra Home', href: 'https://plxtra.org/' },
			],
			sidebar: [
				{
					label: 'Introduction',
					slug: '',
				},
				{
					label: 'Concepts',
					autogenerate: { directory: 'concepts', collapsed: true },
				},
				{
					label: 'Command Line Tools',
					collapsed: true,
					autogenerate: { directory: 'cli', collapsed: true },
				},
				{
					label: 'REST API',
					collapsed: true,
					autogenerate: { directory: 'rest', collapsed: true },
				},
				{
					label: 'WebSocket API',
					collapsed: true,
					items: [
						"ws",
						"ws/usage",
						{
							label: 'Event',
							collapsed: true,
							autogenerate: { directory: 'ws/event' },
						},
						{
							label: 'Feed',
							collapsed: true,
							autogenerate: { directory: 'ws/feed' },
						},
						{
							label: 'Request',
							collapsed: true,
							autogenerate: { directory: 'ws/request' },
						},
						{
							label: 'Subscribe',
							collapsed: true,
							autogenerate: { directory: 'ws/subscribe' },
						},
					]
				},
				{
					label: 'Type Reference',
					autogenerate: { directory: 'proto' },
				},
				{
					label: 'Plxtra',
					link: 'https://plxtra.org/api/oms/',
					attrs: { style: 'font-style: italic' },
				},
			],
		}),
	],
});
