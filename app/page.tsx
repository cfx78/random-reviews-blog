'use client';

import Link from 'next/link';

const Dashboard = () => {
	return (
		<main className="h-screen w-screen">
			<section className=" bg-secondary h-full w-full text-light flex justify-center items-center">
				<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
							Random
							<span className="sm:block md:inline">
								{' '}
								Reviews{' '}
							</span>
						</h1>

						<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
							A blog with random reviews of random movies, games,
							music, and shows. I built this site to learn
							Next.js, Sanity and Tailwind CSS. I also wanted to
							have a place to write about the things I enjoy. I
							hope you enjoy it too!
						</p>

						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<Link
								className="block w-full rounded border border-blue-600 bg-gradient-to-r from-primary via-secondary to-accent px-12 py-3 text-sm font-medium text-light hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
								href="/home">
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Dashboard;
