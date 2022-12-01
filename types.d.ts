type ClubOwner = {
	name: string;
	email: string;
	socials: Array<{
		name: string;
		username: string;
		url: string;
	}>;
};

type Pole = {
	name: string;
	users: TeamUsers[];
};

type TeamUser = {
	name: string;
	image: string;
	details: UserDetails[];
	responsable?: boolean;
};

type UserDetail = {
	fname: string;
	lname: string;
	contact: string;
};
