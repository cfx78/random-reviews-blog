import getGamesPosts from '@/utils/getGamesPosts';
import Card from '@/components/Card';

const Games = async () => {
	const gamesPosts = await getGamesPosts();
	console.log(gamesPosts);
	return (
		<div className="w-full">
			<div className="max-w-5xl mx-auto">
				{gamesPosts.map(
					(gamesPost) => (
						console.log(gamesPost.extLink),
						(
							<Card
								img={gamesPost.image}
								alt={gamesPost.alt}
								title={gamesPost.title}
								link={`/home/movies/${gamesPost.slug}`}
								key={gamesPost._id}
								extLink={`${gamesPost.extLink}`}
								date={gamesPost.publishedAt}
								meta={gamesPost.metaCritic}
								category={gamesPost.category}
								rating={gamesPost.rating}
							/>
						)
					),
				)}
			</div>
		</div>
	);
};

export default Games;
