const Unavailable = () => {
	return (
		<div className="flex-grow flex flex-col gap-4 items-center justify-center">
			<h1 className="text-3xl text-primary font-semibold uppercase">
				Cette page est actuellement en cours de developpement
			</h1>
			<h3 className="text-xl">
				Revenez un peu plus tard, peut-être que vous aurez plus de chance!
			</h3>
		</div>
	);
};

export default Unavailable;
