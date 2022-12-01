import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

type Prop = {
	details: UserDetail;
};

const UserDetails = (props: Prop) => {
	const { details } = props;
	return (
		<>
			<div className="text-lg text-center align-middle my-auto ">
				<span className="font-semibold">{`${details.fname} ${details.lname}`}</span>
				<div>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="mr-2"
						fixedWidth
					/>
					<a
						className="link link-hover decoration-secondary"
						href={`mailto:${details.contact.mail}`}
					>
						{details.contact.mail}
					</a>
					{details.contact.insta && (
						<div>
							<a
								className="link link-hover decoration-secondary"
								target={"_blank"}
								href={`https://instagram.com/${details.contact.insta}`}
							>
								<FontAwesomeIcon
									className="mr-2 text-lg"
									icon={faInstagram}
									fixedWidth
								/>
								{details.contact.insta}
							</a>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default UserDetails;
