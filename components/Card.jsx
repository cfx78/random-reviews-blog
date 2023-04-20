import Image from 'next/image';
import Link from 'next/link';
import { SiImdb, SiSpotify, SiTwitch } from 'react-icons/si';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import urlFor from '@/utils/urlFor';

const _Card = (props) => {
	return (
		<article className="flex bg-secondary text-gray-200 transition hover:shadow-xl">
			<div className="rotate-180 bg-neutral p-2 [writing-mode:_vertical-lr] border border-accent">
				<time className="flex items-center justify-between gap-4 text-xs font-bold uppercase ">
					<span className="w-px flex-1 bg-primary"></span>
					<span>{props.date}</span>
				</time>
			</div>

			<div className="hidden sm:block sm:basis-56">
				<Image
					src={urlFor(props.img).blur(5).width(500).height(500).url()}
					width={500}
					height={500}
					alt={props.alt}
					className="aspect-square h-full w-full object-cover"
				/>
			</div>

			<div className="flex flex-1 flex-col justify-between">
				<div className="border-l border-neutral p-4 sm:border-l-transparent sm:p-6">
					<h3 className="font-bold text-2xl uppercase text-center">
						{props.title}
					</h3>

					<div className=" w-full h-full">
						<div className="grid w-full max-h-full place-content-between place-items-center  grid-cols-2 pt-8 pb-5">
							<div className="text-center flex flex-col items-center col-span-1 justify-center max-w-max">
								{props.category === 'Movies' && (
									<Link
										target="_blank"
										href={props.extLink}
										className="max-w-fit">
										{' '}
										<SiImdb className="text-5xl mx-auto" />{' '}
										Imdb Link Here
									</Link>
								)}
								{props.category === 'TV' && (
									<Link
										target="_blank"
										href={props.extLink}
										className="max-w-fit">
										{' '}
										<SiImdb className="text-5xl mx-auto" />{' '}
										Imdb Link Here
									</Link>
								)}
								{props.category === 'Music' && (
									<Link
										target="_blank"
										href={props.extLink}
										className="max-w-fit">
										{' '}
										<SiSpotify className="text-5xl mx-auto" />{' '}
										Spotify Link Here
									</Link>
								)}
								{props.category === 'Videogames' && (
									<Link
										target="_blank"
										href={props.extLink}
										className="max-w-fit">
										<SiTwitch className="text-5xl mx-auto" />
										IGDB Link Here
									</Link>
								)}
							</div>
							{props.rating === 'good' && (
								<div className="text-center flex flex-col items-center justify-center max-w-max w-full h-full align-top col-span-1">
									<FaRegThumbsUp className="text-5xl mx-auto" />
									My Rating
								</div>
							)}
							{props.rating === 'bad' && (
								<div className="text-center flex flex-col items-center justify-center max-w-max w-full h-full align-top col-span-1">
									<FaRegThumbsDown className="text-5xl mx-auto" />
									My Rating
								</div>
							)}
						</div>
						<div className="text-xl text-center space-y-2">
							<p>Review Date: {props.date}</p>
							<p>MetaScore: {props.meta}</p>
						</div>
					</div>
				</div>

				<div className="sm:flex sm:items-end sm:justify-end">
					<Link
						href={props.link}
						className="block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-accent">
						Read Blog
					</Link>
				</div>
			</div>
		</article>
	);
};

export default _Card;
