import TeamHeader from "components/Team/TeamHeader";
import TeamMember from "components/Team/TeamMember";

import { poles } from "config/index";

const Team = () => {
	return (
		<div className="max-w-9xl m-12">
			<h1 className="text-5xl text-center font-semibold underline decoration-secondary mb-16 uppercase">
				Notre équipe
			</h1>
			{poles.map(pole => (
				<div key={pole.name}>
					<TeamHeader name={pole.name} />
					<span className="flex flex-wrap justify-center gap-28">
						{pole.users.map(user => (
							<TeamMember
								key={user.image}
								image={user.image}
								responsable={user.responsable}
								userDetails={user.details}
							/>
						))}
					</span>
				</div>
			))}
		</div>
	);
};

export default Team;
