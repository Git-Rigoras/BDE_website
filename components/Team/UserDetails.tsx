import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Prop = {
	details: UserDetail;
};

const UserDetails = (props: Prop) => {
	const { details } = props;
	return (
		<>
			<div className="text-lg text-center align-middle my-auto">
				{`${details.fname} ${details.lname}`}
				<div>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="mr-2"
						fixedWidth
					/>
					<a href={`mailto:${details.contact}`}>{details.contact}</a>
				</div>
			</div>
		</>
	);
};

export default UserDetails;
