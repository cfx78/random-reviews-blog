'use client';

import getMoviePosts from '@/utils/getMoviePosts';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
const Movies = async () => {
	const moviePosts = await getMoviePosts();

	return (
		<div className="w-full h-screen bg-neutral">
			<Header category="Movies" />
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					type: 'spring',
					stiffness: 100,
				}}
				className="max-w-5xl mx-auto space-y-10">
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
			</motion.div>
		</div>
	);
};

export default Movies;
