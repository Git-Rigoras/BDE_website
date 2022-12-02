import type { NextPage } from "next";

import Unavailable from "components/Misc/Unavailable";
import Title from "components/Misc/Title";

const ShopPage: NextPage = () => {
	return (
		<>
			<Title content="Boutique | BDE CESI Rouen" />
			<div className="flex-grow flex">
				<Unavailable />
			</div>
		</>
	);

	return <div></div>;
};

export default ShopPage;
