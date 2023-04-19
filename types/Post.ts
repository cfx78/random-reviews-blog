import { PortableTextBlock } from 'sanity';

export type Post = {
	_id: string;

	publishedAt: string;

	title: string;

	slug: string;

	image: string;

	alt: string;

	body: PortableTextBlock[];

	authorName: string;

	authorImage: string;

	extLink: string;

	metaCritic: number;

	category: string;

	rating: string;
};
