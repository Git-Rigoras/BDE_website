import Title from "components/Misc/Title";
import Team from "components/Team/Team";

const TeamPage = () => {
	return (
		<>
			<Title content="Équipe | BDE CESI Rouen" />
			<div className="py-10 flex justify-center">
				<Team />
			</div>
		</>
	);
};

export default TeamPage;
