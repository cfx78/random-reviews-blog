const Header = (props) => {
	return (
		<div className="w-full bg-secondary grid place-content-center mb-12 gap-4 max-h-fit p-4 border-2 border-primary">
			<h1 className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text  font-extrabold text-transparent text-5xl text-center">
				Random
				<span className="sm:block md:inline"> Reviews </span>
			</h1>
			<h1 className="text-4xl flex justify-center items-center text-center py-2 rounded-md bg-primary text-gray-200">
				{props.category}
			</h1>
		</div>
	);
};

export default Header;
