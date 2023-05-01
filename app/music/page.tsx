import getMusicPosts from '@/utils/getMusicPosts';
import Card from '@/components/Card';
import Header from '@/components/Header';
export const revalidate = 60;
const Music = async () => {
	const musicPosts = await getMusicPosts();

	return (
		<div className="w-full h-screen bg-neutral">
			<Header category="Music" />
			<div className="max-w-5xl mx-auto space-y-10">
				{musicPosts.map((musicPost) => (
					<Card
						img={musicPost.image}
						alt={musicPost.alt}
						title={musicPost.title}
						link={`/movies/${musicPost.slug}`}
						key={musicPost._id}
						extLink={`${musicPost.extLink}`}
						date={musicPost.publishedAt}
						meta={musicPost.metaCritic}
						category={musicPost.category}
						rating={musicPost.rating}
					/>
				))}
			</div>
		</div>
	);
};

export default Music;
