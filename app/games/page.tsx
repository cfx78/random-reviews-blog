import getGamesPosts from '@/utils/getGamesPosts';
import Card from '@/components/Card';
import Header from '@/components/Header';
export const revalidate = 60;
const Games = async () => {
	const gamesPosts = await getGamesPosts();
	return (
		<div className="w-full h-screen bg-neutral">
			<Header category="Games" />
			<div className="max-w-5xl mx-auto space-y-10">
				{gamesPosts.map((gamesPost) => (
					<Card
						img={gamesPost.image}
						alt={gamesPost.alt}
						title={gamesPost.title}
						link={`/movies/${gamesPost.slug}`}
						key={gamesPost._id}
						extLink={`${gamesPost.extLink}`}
						date={gamesPost.publishedAt}
						meta={gamesPost.metaCritic}
						category={gamesPost.category}
						rating={gamesPost.rating}
					/>
				))}
			</div>
		</div>
	);
};

export default Games;
