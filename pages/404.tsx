import Title from "components/Misc/Title";

const NotFoundPage = () => {
	return (
		<>
			<Title content="Erreur 404 | BDE CESI Rouen" />
			<div className="flex-grow flex flex-col items-center justify-center gap-4">
				<h1 className="text-3xl text-primary font-semibold uppercase">
					Erreur 404
				</h1>
				<h3 className="text-xl">
					Nous n'avons pas réussi à trouver cette page...
				</h3>
			</div>
		</>
	);
};

export default NotFoundPage;
