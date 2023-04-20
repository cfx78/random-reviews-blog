import urlFor from '@/utils/urlFor';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
const Article = (props) => {
	return (
		<div className="w-screen h-screen bg-secondary">
			<div className="w-full h-fit md:pt-0 flex flex-col items-center">
				<div
					className="md:mt-11 mb-0 w-full max-w-screen-md mx-auto relative "
					style={{ height: '24rem' }}>
					<div
						className="absolute left-0 bottom-0 w-full h-full z-10"
						style={{
							backgroundImage:
								'linear-gradient(180deg,transparent,rgba(0,0,0,1))',
						}}></div>
					<Image
						src={urlFor(props.image)
							.blur(5)
							.width(500)
							.height(500)
							.url()}
						fill
						className="absolute left-0 top-0 w-full h-full z-0 object-center object-cover"
						alt={props.alt}
					/>
					<div className="p-4 absolute bottom-0 left-0 z-20">
						<span className="px-4 py-1 hidden bg-black text-gray-200 lg:inline-flex items-center justify-center h-full mb-2">
							{props.category}
						</span>
						<h2 className="text-4xl font-semibold text-gray-100 leading-tight">
							{props.title}
						</h2>
						<div className="flex mt-3">
							<Image
								src={urlFor(props.authorImage)
									.blur(5)
									.width(500)
									.height(500)
									.url()}
								width={500}
								height={500}
								className="h-10 w-10 rounded-full mr-2 object-cover"
								alt={''}
							/>
							<div>
								<p className="font-semibold text-gray-200 text-sm">
									{props.authorName}
								</p>
								<time className="font-semibold text-gray-400 text-xs">
									<span>{props.publishedAt}</span>
								</time>
							</div>
						</div>
					</div>
				</div>
				<div className="prose lg:text-xl border-neutral w-screen md:px-12 md:py-6  border-4 h-max bg-gray-100 lg:mb-10">
					<PortableText value={props.body} />
				</div>

				<footer className="footer hidden lg:block lg:fixed w-screen h-20 bottom-0  mt-36">
					<Image
						src={props.image}
						alt={props.alt}
						fill
						className="object-cover object-center w-full h-full"
					/>
				</footer>
			</div>
		</div>
	);
};

export default Article;
