// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Order Management System APIs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Command Line Tools',
					autogenerate: { directory: 'cli', collapsed: true },
				},
				{
					label: 'REST API',
					autogenerate: { directory: 'rest', collapsed: true },
				},
				{
					label: 'WebSocket API',
					autogenerate: { directory: 'ws', collapsed: true },
				},
				{
					label: 'Type Reference',
					autogenerate: { directory: 'proto' },
				},
			],
		}),
	],
});
