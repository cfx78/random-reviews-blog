'use client';

import getTvPosts from '@/utils/getTvPosts';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const Tv = async () => {
	const tvPosts = await getTvPosts();

	return (
		<div className="w-full h-screen bg-neutral">
			<Header category="TV" />
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					type: 'spring',
					stiffness: 100,
				}}
				className="max-w-5xl mx-auto space-y-10">
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
			</motion.div>
		</div>
	);
};

export default Tv;
