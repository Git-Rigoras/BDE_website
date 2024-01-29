import type { NextPage } from "next";

import Unavailable from "components/Misc/Unavailable";
import ProductDisplayer from "components/Boutique/productDisplayer";
import Title from "components/Misc/Title";

const ShopPage: NextPage = () => {
	return (
		<>
			<Title content="Boutique | BDE CESI Rouen" />
			<ProductDisplayer/>
		</>
	);

	return <div></div>;
};

export default ShopPage;
