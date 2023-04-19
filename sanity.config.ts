import { defineConfig } from 'sanity';
import { schemaTypes } from './schemas';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
const config = defineConfig({
	projectId: 'skv7iqiy',

	dataset: 'production',

	title: 'Random Reviews',

	apiVersion: '2023-04-10',

	basePath: '/admin',

	plugins: [deskTool(), visionTool()],
	schema: {
		types: schemaTypes,
	},
});

export default config;
