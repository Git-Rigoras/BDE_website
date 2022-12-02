import type { NextPage } from "next";

import Unavailable from "components/Misc/Unavailable";
import Title from "components/Misc/Title";

const EventsPage: NextPage = () => {
	return (
		<>
			<Title content="Évènements | BDE CESI Rouen" />
			<div className="flex-grow flex">
				<Unavailable />
			</div>
		</>
	);

	return <div></div>;
};

export default EventsPage;
