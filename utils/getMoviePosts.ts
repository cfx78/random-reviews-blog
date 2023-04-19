import { Post } from '@/types/Post';
import { createClient, groq } from 'next-sanity';

async function getMoviePosts(): Promise<Post[]> {
	const client = createClient({
		projectId: 'skv7iqiy',

		dataset: 'production',

		apiVersion: '2023-04-15',

		useCdn: true,
	});
	return client.fetch(
		groq`*[_type == "post" &&  "Movies" in categories[]->title] | order(publishedAt desc){

            _id,

            publishedAt,

            title,

            "slug": slug.current,

            "image": mainImage.asset->url,

            "alt": mainImage.alt,

            body,

            extLink,

            metaCritic,

            "category": categories[0]->title,

            rating,

            "authorName": author -> name,

            "authorImage": author -> image.asset->url
}`,
	);
}

export default getMoviePosts;
