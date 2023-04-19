import { Post } from '@/types/Post';
import { createClient, groq } from 'next-sanity';

async function getPost(slug: string): Promise<Post> {
	const client = createClient({
		projectId: 'skv7iqiy',

		dataset: 'production',

		apiVersion: '2023-04-15',

		useCdn: true,
	});

	return client.fetch(
		groq`*[_type == "post" &&  slug.current == $slug][0]{

            _id,

            publishedAt,

            title,

            "slug": slug.current,

            "image": mainImage.asset->url,

            "alt": mainImage.alt,

            body,

            extLink,

            metaCritic,

            "authorName": author -> name,

            "authorImage": author -> image.asset->url


}`,
		{ slug },
	);
}

export default getPost;
