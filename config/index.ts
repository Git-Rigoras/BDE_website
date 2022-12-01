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

export const poles: Pole[] = [
	{
		name: "Présidence",
		users: [
			{
				name: "Co présidents",
				image: "/images/team/coprésidents.jpg",
				details: [
					{
						fname: "Romain",
						lname: "GIRCOURT",
						contact: "romain.gircourt@viacesi.fr",
					},
					{
						fname: "Luca",
						lname: "GONCALVES",
						contact: "luca.goncalves@viacesi.fr",
					},
				],
			},
			{
				name: "vice président",
				image: "/images/team/vice_président.jpg",
				details: [
					{
						fname: "Cyprien",
						lname: "PESCHET",
						contact: "cyprien.preschet@viacesi.fr",
					},
				],
			},
		],
	},
	{
		name: "Administration",
		users: [
			{
				name: "Secrétaire",
				image: "/images/team/secrétaire.jpg",
			},
			{
				name: "Trésorière",
				image: "/images/team/trésorière.jpg",
			},
		],
	},
	{
		name: "Pôle évènements",
		users: [
			{
				name: "Responsable pôle évenement",
				image: "/images/team/responsable_event.jpg",
				responsable: true,
			},
			{
				name: "Pole évènement - Soirées",
				image: "/images/team/event_soirée.jpg",
			},
			{
				name: "Pole évenement - Sport",
				image: "/images/team/event_sport.jpg",
			},
		],
	},
	{
		name: "Pôle clubs",
		users: [
			{
				name: "Responsable du pôle club",
				image: "/images/team/responsable_club.jpg",
				responsable: true,
			},
			{
				name: "Pôle Club",
				image: "/images/team/club.jpg",
			},
		],
	},
	{
		name: "Pôle communication",
		users: [
			{
				name: "Responsable du pôle communication",
				image: "/images/team/responsable_communication.jpg",
				responsable: true,
			},
			{
				name: "Pôle communication",
				image: "/images/team/communication.jpg",
			},
			{
				name: "Pôle communication - Site",
				image: "/images/team/communication_site.jpg",
			},
		],
	},
];

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
