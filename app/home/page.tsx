import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { CgFilm, CgGames, CgMusicSpeaker, CgScreen } from 'react-icons/cg';
import Link from 'next/link';
const page = () => {
	return (
		<section className="w-screen h-screen flex justify-center items-center bg-neutral text-light">
			<div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
					<div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
						<h2 className="text-4xl text-primary font-bold sm:text-5xl">
							My approach to reviews
						</h2>

						<p className="mt-4 flex flex-col text-center justify-center items-center text-gray-200 md:pb-9">
							Each review will be rated with a simple
							<FaRegThumbsUp className="text-accent" />
							or
							<FaRegThumbsDown className="text-accent" />
							This along with other relative information will be
							displayed on the cards located on the category page.
							The reviews will contain a brief summary, a list of
							pros, a list of cons, and my opinion on who will
							enjoy the material. I will also try to keep the
							reviews spoiler free when it comes to games, movies,
							and shows. If you want to know more about a review,
							click the link to the original source. Thanks for
							reading! I hope you enjoy the site.
						</p>
					</div>

					<div>
						<h4
							className="text-2xl text-primary font-bold sm:text-3xl pb-6
							">
							Choose a category to get started
						</h4>
						<div className="grid grid-cols-2 gap-4 text-accent ">
							<Link
								className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-accent hover:ring-1 hover:ring-light focus:outline-none focus:ring text-secondary text-4xl text-center hover:text-accent "
								href="/movies">
								<span className="inline-block rounded-lg bg-light p-3">
									<CgFilm className="h-10 w-10" />
								</span>
								<h2 className="mt-2 hover:text-accent text-light font-bold">
									Movies
								</h2>
							</Link>
							<Link
								className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-accent hover:ring-1 hover:ring-light focus:outline-none focus:ring text-secondary text-4xl text-center hover:text-accent "
								href="/games">
								<span className="inline-block rounded-lg bg-light p-3">
									<CgGames className="h-10 w-10" />
								</span>
								<h2 className="mt-2 hover:text-accent text-light font-bold">
									Games
								</h2>
							</Link>
							<Link
								className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-accent hover:ring-1 hover:ring-light focus:outline-none focus:ring text-secondary text-4xl text-center hover:text-accent "
								href="/tv">
								<span className="inline-block rounded-lg bg-light p-3">
									<CgScreen className="h-10 w-10" />
								</span>
								<h2 className="mt-2 hover:text-accent text-light font-bold">
									TV
								</h2>
							</Link>
							<Link
								className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-accent hover:ring-1 hover:ring-light focus:outline-none focus:ring text-secondary text-4xl text-center hover:text-accent "
								href="/music">
								<span className="inline-block rounded-lg bg-light p-3">
									<CgMusicSpeaker className="h-10 w-10" />
								</span>
								<h2 className="mt-2 hover:text-accent text-light font-bold">
									Music
								</h2>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
