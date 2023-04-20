'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
	CgFilm,
	CgGames,
	CgHome,
	CgMusicSpeaker,
	CgScreen,
} from 'react-icons/cg';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header
			aria-label="Site Header"
			className=" bg-neutral text-gray-200 w-full">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="hidden  w-full justify-center md:flex">
						<nav aria-label="Site Nav">
							<ul className="flex items-center md:text-lg  gap-6 text-sm">
								<li>
									<Link
										className="transition hover:text-accent"
										href="/home">
										Home
									</Link>
								</li>
								<li>
									<Link
										className=" transition hover:text-accent"
										href="/movies">
										Movies
									</Link>
								</li>

								<li>
									<Link
										className=" transition hover:text-accent"
										href="/games">
										Games
									</Link>
								</li>

								<li>
									<Link
										className=" transition hover:text-accent"
										href="/tv">
										TV
									</Link>
								</li>

								<li>
									<Link
										className="transition hover:text-accent"
										href="/music">
										Music
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div
						className={`c-hamburger c-hamburger--magnetic ${
							isOpen ? `active` : ``
						}  w-screen md:hidden`}
						onClick={() => setIsOpen(!isOpen)}>
						<div className="c-hamburger-inner">
							<span className="c-hamburger-bar"></span>
							<span className="c-hamburger-bar"></span>
							<span className="c-hamburger-bar"></span>
						</div>
						<h1 className=" w-96 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text  font-extrabold text-transparent text-2xl text-center ">
							Random Reviews
						</h1>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="flex w-56 h-screen flex-col justify-between absolute z-30 border-r bg-light">
					<div className="px-4 py-6">
						<nav
							aria-label="Main Nav"
							className="mt-6 flex flex-col gap-16 text-5xl">
							<Link
								href="/home"
								className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgHome />

								<span className="text-sm font-medium">
									{' '}
									Home{' '}
								</span>
							</Link>
							<Link
								href="/movies"
								className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgFilm />

								<span className="text-sm font-medium">
									{' '}
									Movies{' '}
								</span>
							</Link>
							<Link
								href="/music"
								className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgMusicSpeaker />

								<span className="text-sm font-medium">
									{' '}
									Music{' '}
								</span>
							</Link>
							<Link
								href="/tv"
								className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgScreen />

								<span className="text-sm font-medium">
									{' '}
									TV{' '}
								</span>
							</Link>
							<Link
								href="/games"
								className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgGames />

								<span className="text-sm font-medium">
									{' '}
									Games{' '}
								</span>
							</Link>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
