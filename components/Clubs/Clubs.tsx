import type { Club, ClubOwner } from "@prisma/client";

import ClubCard from "components/Clubs/ClubCard";

type Props = {
	clubs: Array<
		Club & {
			owner: ClubOwner;
		}
	>;
};

const Clubs = (props: Props) => {
	const { clubs } = props;

	return (
		<div className="max-w-6xl m-12">
			<h1 className="text-3xl font-semibold underline decoration-secondary mb-16 uppercase">
				Clubs
			</h1>
			<div className="flex flex-col gap-8">
				{clubs.map(club => (
					<ClubCard
						key={club.id}
						club={club}
					/>
				))}
			</div>
		</div>
	);
};

export default Clubs;
