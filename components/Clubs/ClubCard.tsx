import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faUserTie } from "@fortawesome/free-solid-svg-icons";
import type { Club, ClubOwner } from "@prisma/client";
import Image from "next/image";

type Props = {
	club: Club & {
		owner: ClubOwner;
	};
};

const ClubCard = (props: Props) => {
	const { club } = props;
	const owner = club.owner;
	const isEmail = !!owner.contact?.includes("@");

	return (
		<div className="flex flex-col md:grid md:grid-cols-8 gap-4 bg-base-100 shadow-lg hover:shadow-xl transition-shadow p-8 rounded-lg">
			<div className="col-span-3 flex justify-center">
				<Image
					src={`/images/clubs/${club.image}`}
					height={320}
					width={320}
					alt={club.name}
					className="rounded w-80"
				/>
			</div>
			<div className="col-span-5 flex flex-col gap-4">
				<h2 className="text-2xl font-semibold">{club.name}</h2>
				<p className="text-justify">{club.description}</p>
				<div className="mt-auto flex flex-col gap-2">
					{!!owner.name && (
						<span className="flex items-center gap-2">
							<FontAwesomeIcon
								icon={faUserTie}
								fixedWidth
								className="text-primary"
							/>
							<span className="font-semibold">{owner.name}</span>
						</span>
					)}

					{!!owner.contact && (
						<span className="flex items-center gap-2">
							<FontAwesomeIcon
								icon={faPaperPlane}
								fixedWidth
								className="text-primary"
							/>
							<a
								href={`${isEmail ? "mailto:" : ""}${owner.contact}`}
								className="link link-hover decoration-secondary"
								target={"_blank"}
							>
								{owner.contact}
							</a>
						</span>
					)}

					{!!owner.instagram && (
						<span className="flex items-center gap-2">
							<FontAwesomeIcon
								icon={faInstagram}
								fixedWidth
								className="text-primary"
							/>
							<a
								href={`https://instagram.com/${owner.instagram}`}
								className="link link-hover decoration-secondary"
								target={"_blank"}
							>
								{owner.instagram}
							</a>
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default ClubCard;
