import { createClient } from 'next-sanity';

import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
	projectId: 'skv7iqiy',

	dataset: 'production',

	apiVersion: '2023-04-15',

	useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
	return builder.image(source);
}

export default urlFor;
