import { Post } from '@/types/Post';
import getPost from '@/utils/getPost';
import { PortableText } from '@portabletext/react';
import { createClient, groq } from 'next-sanity';

type Props = { params: { post: string } };

const client = createClient({
	projectId: 'skv7iqiy',

	dataset: 'production',

	apiVersion: '2023-04-15',

	useCdn: true,
});

export const revalidate = 60;

export async function generateStaticParams() {
	const query = groq`*[_type =='post']{slug}`;

	const slugs: Post[] = await client.fetch(query);

	const slugRoutes = slugs.map((slug) => slug.slug);

	return slugRoutes.map((slug) => ({ params: { post: slug } }));
}

export default async function Post({ params }: Props) {
	const slug = params.post;

	const post = await getPost(slug);
	console.log(post);
	return (
		<div className="w-full h-full flex flex-col justify-center items-center ">
			<h1 className="text-7xl mt-14"> {post.title} </h1>
			<div className="prose text-xl mt-14 p-8">
				<PortableText value={post.body} />
			</div>
		</div>
	);
}
