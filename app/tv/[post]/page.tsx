import Article from '@/components/Article';
import { Post } from '@/types/Post';
import getPost from '@/utils/getPost';
import getTvPosts from '@/utils/getTvPosts';

type Props = { params: { post: string } };

export default async function Post({ params }: Props) {
	const slug = params.post;

	const post = await getPost(slug);

	return (
		<Article
			image={post.image}
			alt={post.alt}
			title={post.title}
			category={post.category}
			authorImage={post.authorImage}
			authorName={post.authorName}
			publishedAt={post.publishedAt}
			body={post.body}
		/>
	);
}

export const revalidate = 60;

export async function generateStaticParams() {
	const getPosts = await getTvPosts();

	const postRoutes = getPosts.map((postRoute: any) => postRoute.slug);

	return postRoutes.map((slug: any) => ({
		post: slug,
	}));
}
