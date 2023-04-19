'use client';

import Link from 'next/link';
import { questrial } from '@/lib/fonts';
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
		<header aria-label="Site Header" class="bg-light w-full">
			<div
				className={` ${questrial.className} mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8`}>
				<div className="flex h-16 items-center justify-between">
					<div className="hidden  w-full justify-center md:flex">
						<nav aria-label="Site Nav">
							<ul className="flex items-center md:text-lg  gap-6 text-sm">
								<li>
									<Link
										className="text-gray-500 transition hover:text-gray-500/75"
										href="/home">
										Home
									</Link>
								</li>
								<li>
									<Link
										className="text-gray-500 transition hover:text-gray-500/75"
										href="/movies">
										Movies
									</Link>
								</li>

								<li>
									<Link
										className="text-gray-500 transition hover:text-gray-500/75"
										href="/games">
										Games
									</Link>
								</li>

								<li>
									<Link
										className="text-gray-500 transition hover:text-gray-500/75"
										href="/tv">
										TV
									</Link>
								</li>

								<li>
									<Link
										className="text-gray-500 transition hover:text-gray-500/75"
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
						} flex justify-center w-screen md:hidden`}
						onClick={() => setIsOpen(!isOpen)}>
						<div className="c-hamburger-inner">
							<span className="c-hamburger-bar"></span>
							<span className="c-hamburger-bar"></span>
							<span className="c-hamburger-bar"></span>
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<div class="flex h-screen flex-col justify-between border-r bg-light">
					<div class="px-4 py-6">
						<nav
							aria-label="Main Nav"
							class="mt-6 flex flex-col gap-16 text-5xl">
							<Link
								href="#"
								class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgHome />

								<span class="text-sm font-medium"> Home </span>
							</Link>
							<Link
								href="#"
								class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgFilm />

								<span class="text-sm font-medium">
									{' '}
									Movies{' '}
								</span>
							</Link>
							<Link
								href="#"
								class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgMusicSpeaker />

								<span class="text-sm font-medium"> Music </span>
							</Link>
							<Link
								href="#"
								class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgScreen />

								<span class="text-sm font-medium"> TV </span>
							</Link>
							<Link
								href="#"
								class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-4 text-gray-700">
								<CgGames />

								<span class="text-sm font-medium"> Games </span>
							</Link>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
