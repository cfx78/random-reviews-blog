import getMoviePosts from '@/utils/getMoviePosts';
import Card from '@/components/Card';
import Header from '@/components/Header';
export const revalidate = 60;

const Movies = async () => {
	const moviePosts = await getMoviePosts();

	return (
		<div className="w-full min-h-screen  bg-neutral">
			<Header category="Movies" />
			<div className="max-w-5xl mx-auto space-y-10">
				{moviePosts.map((moviePost) => (
					<Card
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
				))}
			</div>
		</div>
	);
};

export default Movies;
