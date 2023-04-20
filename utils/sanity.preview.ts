'use client';

import { definePreview } from 'next-sanity/preview';
import { createClient } from 'next-sanity';

const projectId = 'skv7iqiy';
const dataset = 'production';

const config = createClient({
	projectId: 'skv7iqiy',
	dataset: 'production',
	apiVersion: '2023-04-15',
});

function onPublicAccessOnly() {
	throw new Error('Unable to load preview as you are not logged in');
}

if (!projectId || !dataset) {
	throw new Error('Missing projectId or dataset. Check your sanity.json');
}

export const usePreview = definePreview({
	projectId: 'skv7iqiy',
	dataset: 'production',
	onPublicAccessOnly,
});
