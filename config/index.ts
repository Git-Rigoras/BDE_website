import {
	faInstagram,
	faTiktok,
	faDiscord,
	IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export const navbar = {
	links: <Array<Link>>[
		{
			href: "/",
			title: "Panda Colada",
		},
		{
			href: "/equipe",
			title: "L'équipe",
		},
		{
			href: "/clubs",
			title: "Clubs",
		},
		// {
		// 	href: "/evenements",
		// 	title: "Événements",
		// },
		// {
		// 	href: "/boutique",
		// 	title: "Boutique",
		// },
	],
};

export const footer = {
	links: <Array<Link>>[
		{
			href: "/contact",
			title: "Nous contacter",
		},
	],
	socials: <Array<Social>>[
		{
			href: "https://instagram.com/bde_cesi_rouen",
			title: "Instagram",
			icon: faInstagram,
		},
	],
};

export const legal = {
	copyright: "Copyright © 2022 - Tous droits réservés",
};

export const team = {
	presidence: {
		coPresident1: {
			firstName: "Romain",
			lastName: "Gircourt",
			role: "Co-Président",
		},
		coPresident2: {
			firstName: "Luca",
			lastName: "Gonçalves",
			role: "Co-Président",
		},
		vicePresident: {
			firstName: "Cyprien",
			lastName: "Peschet",
			role: "Vice-Président",
		},
		treasury: {
			firstName: "Eloïse",
			lastName: "Normoy",
			role: "Trésorière",
		},
		poles: [
			{
				pole: "Événement",
				leader: {
					firstName: "Sébastien",
					lastName: "Aubert",
				},
				members: [
					{
						firstName: "Nicolas",
						lastName: "Thieulin",
					},
					{
						firstName: "Dilan",
						lastName: "Thieulin",
					},
					{
						firstName: "Antoine",
						lastName: "Gueroult",
					},
					{
						firstName: "Erwan",
						lastName: "Vigier",
					},
					{
						firstName: "Dorian",
						lastName: "Chesnais",
					},
					{
						firstName: "Alexandre",
						lastName: "Mailly",
					},
				],
			},
			{
				pole: "Club",
				leader: {
					firstName: "Matthieu",
					lastName: "Michel",
				},
				members: [
					{
						firstName: "Maxence",
						lastName: "Barbe Pillon",
					},
				],
			},
			{
				pole: "Communication",
				leader: {
					firstName: "Lisa",
					lastName: "Rattier",
				},
				members: [
					{
						firstName: "Coline",
						lastName: "Coelho",
					},
					{
						firstName: "Samuel",
						lastName: "Ward",
					},
					{
						firstName: "Tristan",
						lastName: "Jehanno",
					},
				],
			},
		],
	},
};

export const noFooterPaths = [];

export type Link = {
	href: string;
	title: string;
};

export type Social = {
	href: string;
	title: string;
	icon: IconDefinition;
};
