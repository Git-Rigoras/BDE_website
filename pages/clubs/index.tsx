import type { Club, ClubOwner } from "@prisma/client";

import Clubs from "components/Clubs/Clubs";

import { prisma } from "lib/prisma";

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
		<div className="py-10 flex justify-center">
			<Clubs clubs={clubs} />
		</div>
	);
};

const getServerSideProps = async () => {
	const clubs = await prisma.club.findMany({
		include: {
			owner: true,
		},
	});
	const serializedClubs = JSON.parse(JSON.stringify(clubs));

	return {
		props: {
			clubs: serializedClubs,
		},
	};
};

export default ClubsPage;
export { getServerSideProps };
