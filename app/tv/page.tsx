import getTvPosts from '@/utils/getTvPosts';
import Card from '@/components/Card';

const Tv = async () => {
	const tvPosts = await getTvPosts();
	console.log(tvPosts);
	return (
		<div className="w-full">
			<div className="max-w-5xl mx-auto">
				{tvPosts.map(
					(tvPost) => (
						console.log(tvPost.extLink),
						(
							<Card
								img={tvPost.image}
								alt={tvPost.alt}
								title={tvPost.title}
								link={`/home/movies/${tvPost.slug}`}
								key={tvPost._id}
								extLink={`${tvPost.extLink}`}
								date={tvPost.publishedAt}
								meta={tvPost.metaCritic}
								category={tvPost.category}
								rating={tvPost.rating}
							/>
						)
					),
				)}
			</div>
		</div>
	);
};

export default Tv;
