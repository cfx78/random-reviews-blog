import getMusicPosts from '@/utils/getMusicPosts';
import Card from '@/components/Card';

const Music = async () => {
	const musicPosts = await getMusicPosts();
	console.log(musicPosts);
	return (
		<div className="w-full">
			<div className="max-w-5xl mx-auto">
				{musicPosts.map(
					(musicPost) => (
						console.log(musicPost.extLink),
						(
							<Card
								img={musicPost.image}
								alt={musicPost.alt}
								title={musicPost.title}
								link={`/home/movies/${musicPost.slug}`}
								key={musicPost._id}
								extLink={`${musicPost.extLink}`}
								date={musicPost.publishedAt}
								meta={musicPost.metaCritic}
								category={musicPost.category}
								rating={musicPost.rating}
							/>
						)
					),
				)}
			</div>
		</div>
	);
};

export default Music;
