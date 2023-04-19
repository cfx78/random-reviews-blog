import getMoviePosts from '@/utils/getMoviePosts';
import _Card from '@/components/_Card';

const Movies = async () => {
	const moviePosts = await getMoviePosts();
	console.log(moviePosts);
	return (
		<div className="w-full h-screen bg-neutral">
			<div className="w-full bg-secondary mb-12">
				{' '}
				<h1 className="text-7xl text-center text-white p-16">Movies</h1>
			</div>
			<div className="max-w-5xl mx-auto space-y-10">
				{moviePosts.map(
					(moviePost) => (
						console.log(moviePost.extLink),
						(
							<_Card
								img={moviePost.image}
								alt={moviePost.alt}
								title={moviePost.title}
								link={`/movies/${moviePost.slug}`}
								key={moviePost._id}
								extLink={`${moviePost.extLink}`}
								date={moviePost.publishedAt}
								meta={moviePost.metaCritic}
								category={moviePost.category}
								rating={moviePost.rating}
							/>
						)
					),
				)}
			</div>
		</div>
	);
};

export default Movies;
