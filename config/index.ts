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
						contact: {
							mail: "romain.gircourt@viacesi.fr",
						},
					},
					{
						fname: "Luca",
						lname: "GONCALVES",
						contact: {
							mail: "luca.goncalves@viacesi.fr",
						},
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
						contact: {
							mail: "cyprien.peschet@viacesi.fr",
						},
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
				details: [
					{
						fname: "Thomas",
						lname: "LE MONNIER",
						contact: {
							mail: "thomas.lemonnier@viacesi.fr",
						},
					},
				],
			},
			{
				name: "Trésorière",
				image: "/images/team/trésorière.jpg",
				details: [
					{
						fname: "Éloïse",
						lname: "NORMOY",
						contact: {
							mail: "eloise.normoy@viacesi.fr",
						},
					},
				],
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
				details: [
					{
						fname: "Sébastien",
						lname: "AUBERT",
						contact: {
							mail: "sebastien.aubert@viacesi.fr",
						},
					},
				],
			},
			{
				name: "Pole évènement - Soirées",
				image: "/images/team/event_soirée.jpg",
				details: [
					{
						fname: "Alexandre",
						lname: "MAILLY",
						contact: {
							mail: "alexandre.mailly@viacesi.fr",
						},
					},
					{
						fname: "Erwan",
						lname: "VIGIER",
						contact: {
							mail: "erwan.vigier@viacesi.fr",
						},
					},
					{
						fname: "Dorian",
						lname: "CHESNAIS",
						contact: {
							mail: "dorian.chesnais@viacesi.fr",
						},
					},
				],
			},
			{
				name: "Pole évenement - Sport",
				image: "/images/team/event_sport.jpg",
				details: [
					{
						fname: "Antoine",
						lname: "GUEROULT",
						contact: {
							mail: "antoine.gueroult@viacesi.fr",
						},
					},
					{
						fname: "Nicolas",
						lname: "THIEULIN",
						contact: {
							mail: "nicolas.thieulin@viacesi.fr",
						},
					},
					{
						fname: "Dilan",
						lname: "THIEULIN",
						contact: {
							mail: "dilan.thieulin@viacesi.fr",
						},
					},
				],
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
				details: [
					{
						fname: "Matthieu",
						lname: "MICHEL",
						contact: {
							mail: "matthieu.michel@viacesi.fr",
						},
					},
				],
			},
			{
				name: "Pôle Club",
				image: "/images/team/club.jpg",
				details: [
					{
						fname: "Maxence",
						lname: "BARBE PILLON",
						contact: {
							mail: "maxence.barbepillon@viacesi.fr",
						},
					},
				],
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
				details: [
					{
						fname: "Lisa",
						lname: "RATTIER",
						contact: {
							mail: "lisa.rattier@viacesi.fr",
						},
					},
				],
			},
			{
				name: "Pôle communication",
				image: "/images/team/communication.jpg",
				details: [
					{
						fname: "Coline",
						lname: "COELHO",
						contact: {
							mail: "coline.coelho@viacesi.fr",
						},
					},
				],
			},
			{
				name: "Pôle communication - Site",
				image: "/images/team/communication_site.jpg",
				details: [
					{
						fname: "Tristan",
						lname: "JEHANNO",
						contact: {
							mail: "tristan.jehanno@viacesi.fr",
							insta: "tritriexception",
						},
					},
					{
						fname: "Samuel",
						lname: "WARD",
						contact: {
							mail: "samuel.ward@teaminfernal.fr",
						},
					},
				],
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
