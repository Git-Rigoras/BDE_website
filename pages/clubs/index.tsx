import type { Club, ClubOwner } from "@prisma/client";

import Clubs from "components/Clubs/Clubs";
import Title from "components/Misc/Title";

import { clubs } from "config/index"

type Props = {
	clubs: Array<
		Club & {
			owner: ClubOwner;
		}
	>;
};

const ClubsPage = (props: Props) => {
	const { clubs } = props;

	return (
		<>
			<Title content="Clubs | BDE CESI Rouen" />
			<div className="py-10 flex justify-center">
				<Clubs clubs={clubs} />
			</div>
		</>
	);
};

const getServerSideProps = async () => {
	const serializedClubs = JSON.parse(JSON.stringify(clubs));

	return {
		props: {
			clubs: serializedClubs,
		},
	};
};

export default ClubsPage;
export { getServerSideProps };
