import Image from 'next/image';
import Link from 'next/link';
import { SiImdb, SiSpotify, SiTwitch } from 'react-icons/si';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import urlFor from '@/utils/urlFor';

const Card = (props) => {
	return (
		<div className="card max-w-xl lg:max-h-[26rem] lg:max-w-7xl mx-auto  lg:card-side bg-base-100 shadow-xl">
			<figure className="bg-primary border-4  border-primary">
				<Image
					src={urlFor(props.img).blur(5).width(500).height(500).url()}
					width={500}
					height={500}
					alt={props.alt}
					className="object-center "
				/>
			</figure>
			<div className="card-body bg-base-100">
				<div className=" w-full border-b-4 border-primary">
					<h2 className="card-title text-center text-4xl pb-2 justify-center">
						{props.title}
					</h2>
				</div>
				<div className=" w-full h-full">
					<div className="grid w-full max-h-full place-content-between place-items-center  grid-cols-2 pt-8 pb-5">
						<div className="text-center flex flex-col items-center col-span-1 justify-center max-w-max">
							{props.category === 'Movies' && (
								<Link
									target="_blank"
									href={props.extLink}
									className="max-w-fit">
									{' '}
									<SiImdb className="text-5xl mx-auto" /> Imdb
									Link Here
								</Link>
							)}
							{props.category === 'TV' && (
								<Link
									target="_blank"
									href={props.extLink}
									className="max-w-fit">
									{' '}
									<SiImdb className="text-5xl mx-auto" /> Imdb
									Link Here
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
				<div className="card-actions pt-6  justify-center ">
					<Link href={props.link} className="btn btn-primary">
						Click me to Read the Review
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
