import Image from "next/image";
import { useState } from "react";
import UserDetails from "./UserDetails";

import cn from "classnames";

const TeamMember = (props: any) => {
	const { image, responsable, userDetails } = props;

	const [details, setDetails] = useState<boolean>(false);
	return (
		<div
			className={cn("swap cursor-default", { "swap-active": !details })}
			onMouseEnter={() => setDetails(true)}
			onMouseLeave={() => setDetails(false)}
		>
			<Image
				src={image}
				width={400}
				height={400}
				alt=""
				className={cn("rounded-2xl swap-on", {
					"border-accent border-2": responsable,
				})}
			/>
			<div className="card bg-base-100 w-[25rem] h-[25-rem] flex overflow-hidden swap-off">
				<div className="card-body border-secondary border-4 rounded-2xl">
					{userDetails?.map((userDetail: UserDetail) => (
						<UserDetails
							key={`${userDetail.fname}${userDetail.lname}`}
							details={userDetail}
						></UserDetails>
					))}
					<div className="card-actions justify-end"></div>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
