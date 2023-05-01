import getTvPosts from '@/utils/getTvPosts';
import Card from '@/components/Card';
import Header from '@/components/Header';
export const revalidate = 60;
const Tv = async () => {
	const tvPosts = await getTvPosts();

	return (
		<div className="w-full h-screen bg-neutral">
			<Header category="TV" />
			<div className="max-w-5xl mx-auto space-y-10">
				{tvPosts.map((tvPost) => (
					<Card
						img={tvPost.image}
						alt={tvPost.alt}
						title={tvPost.title}
						link={`/movies/${tvPost.slug}`}
						key={tvPost._id}
						extLink={`${tvPost.extLink}`}
						date={tvPost.publishedAt}
						meta={tvPost.metaCritic}
						category={tvPost.category}
						rating={tvPost.rating}
					/>
				))}
			</div>
		</div>
	);
};

export default Tv;
