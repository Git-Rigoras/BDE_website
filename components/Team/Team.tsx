import { poles } from "config/index";
import TeamHeader from "components/Team/TeamHeader";
import TeamMember from "components/Team/TeamMember";
import TeamDescription from "./TeamDescription";

const Team = () => {
	return (
		<div className="px-64 py-24">
			<div className="flex">
				<TeamDescription />
			</div>
			{poles.map(pole => {
				return (
					<>
						<TeamHeader name={pole.name} />
						<span className="flex justify-center gap-28">
							{pole.users.map(user => {
								return (
									<TeamMember
										image={user.image}
										responsable={user.responsable}
										userDetails={user.details}
									/>
								);
							})}
						</span>
					</>
				);
			})}
		</div>
	);
};

export default Team;
