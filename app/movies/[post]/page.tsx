import { Post } from '@/types/Post';
import getPost from '@/utils/getPost';
import { createClient, groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import urlFor from '@/utils/urlFor';

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
	console.log(post.image);
	return (
		<div className="w-screen h-screen bg-secondary">
			<div className="w-full h-full pt-96 md:pt-36 lg:pt-0 absolute flex flex-col items-center justify-center">
				<div
					className="mb-4 pt-48 md:mb-0 w-full max-w-screen-md mx-auto relative "
					style={{ height: '24em' }}>
					<div
						className="absolute lg:block hidden left-0 bottom-0 w-full h-full z-10"
						style={{
							backgroundImage:
								'linear-gradient(180deg,transparent,rgba(0,0,0,.7))',
						}}></div>
					<Image
						src={urlFor(post.image)
							.blur(5)
							.width(500)
							.height(500)
							.url()}
						fill
						className="absolute left-0 top-0 w-full h-full z-0 object-cover"
						alt={post.alt}
					/>
					<div className="p-4 absolute bottom-0 left-0 z-20">
						<span className="px-4 py-1 hidden bg-black text-gray-200 lg:inline-flex items-center justify-center mb-2">
							{post.category}
						</span>
						<h2 className="text-4xl font-semibold text-gray-100 leading-tight">
							{post.title}
						</h2>
						<div className="flex mt-3">
							<Image
								src={urlFor(post.authorImage)
									.blur(5)
									.width(500)
									.height(500)
									.url()}
								width={500}
								height={500}
								className="h-10 w-10 rounded-full mr-2 object-cover"
								alt={''}
							/>
							<div>
								<p className="font-semibold text-gray-200 text-sm">
									{post.authorName}
								</p>
								<time className="font-semibold text-gray-400 text-xs">
									<span>{post.publishedAt}</span>
								</time>
							</div>
						</div>
					</div>
				</div>
				<div className="prose text-xl border-neutral border-4 bg-gray-100 mt-14 lg:mb-28 p-20">
					<PortableText value={post.body} />
				</div>

				<footer className="footer hidden lg:block lg:fixed w-screen h-20 bottom-0  mt-36">
					<Image
						src={post.image}
						alt={post.alt}
						fill
						className="object-cover object-center w-full h-full"
					/>
				</footer>
			</div>
		</div>
	);
}
