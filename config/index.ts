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

export const poles = [
	{
		name: "presidence",
		users: [
			{
				name: "vice président",
				image: "public/team/vice_président.jpg",
			},
			{
				name: "Co présidents",
				image: "public/team/coprésidents.jpg",
			},
		],
	},
	{
		name: "administration",
		users: [
			{
				name: "Secrétaire",
				image:
					"/home/tjehanno@mmtt.fr/Documents/Projects/next-bde-delta/public/team/secrétaire.jpg",
			},
			{
				name: "Trésorière",
				image: "public/team/trésorière.jpg",
			},
		],
	},
	{
		name: "events",
		users: [
			{
				name: "Responsable pôle évenement",
				image: "public/team/responsable_event.jpg",
				responsable: true,
			},
			{
				name: "Pole évenement - Soirées",
				image: "public/team/event_soirée.jpg",
			},
			{
				name: "Pole évenement - Sport",
				image: "public/team/event_sport.jpg",
			},
		],
	},
	{
		name: "club",
		users: [
			{
				name: "Responsable du pôle club",
				image: "public/team/responsable_club.jpg",
				responsable: true,
			},
			{
				name: "Pôle Club",
				image: "public/team/club.jpg",
			},
		],
	},
	{
		name: "communication",
		users: [
			{
				name: "Responsable du pôle communication",
				image: "public/team/responsable_communication.jpg",
			},
			{
				name: "Pôle communication",
				image: "public/team/communication.jpg",
			},
			{
				name: "Pôle communication - Site",
				image: "public/team/communication_site.jpg",
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
