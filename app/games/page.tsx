'use client';

import getGamesPosts from '@/utils/getGamesPosts';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
const Games = async () => {
	const gamesPosts = await getGamesPosts();
	return (
		<div className="w-full h-screen bg-neutral">
			<Header category="Games" />
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					type: 'spring',
					stiffness: 100,
				}}
				className="max-w-5xl mx-auto space-y-10">
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
			</motion.div>
		</div>
	);
};

export default Games;
