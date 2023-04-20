'use client';

import getMusicPosts from '@/utils/getMusicPosts';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const Music = async () => {
	const musicPosts = await getMusicPosts();

	return (
		<div className="w-full h-screen bg-neutral">
			<Header category="Music" />
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					type: 'spring',
					stiffness: 100,
				}}
				className="max-w-5xl mx-auto space-y-10">
				{musicPosts.map((musicPost) => (
					<Card
						img={musicPost.image}
						alt={musicPost.alt}
						title={musicPost.title}
						link={`/movies/${musicPost.slug}`}
						key={musicPost._id}
						extLink={`${musicPost.extLink}`}
						date={musicPost.publishedAt}
						meta={musicPost.metaCritic}
						category={musicPost.category}
						rating={musicPost.rating}
					/>
				))}
			</motion.div>
		</div>
	);
};

export default Music;
