import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export const app = {
	name: "BDE CESI ROUEN",
	socials: [
		{
			name: "Instagram",
			link: "https://instagram.com/bde_cesi_rouen",
		},
	],
	partners: [],
};

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
		{
			href: "/evenements",
			title: "Évènements",
		},
		{
			href: "/boutique",
			title: "Boutique",
		},
	],
};

export const footer = {
	about: navbar.links,
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
				name: "Responsable pôle évènement",
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

export const clubs = [
	{
		id: '1',
		slug: 'ces-art',
		name: "CES'ART",
		description: 'Le club de dessin consistera principalement à réaliser divers projets comme des affiches, logos, projets personnels, mais il consistera aussi à partager des techniques et des créations.  Le club et ouvert à tous, aux expérimentés comme aux novices.  Et notre principal mot d’ordre est de s’éclater !',
		image: 'cesart.jpeg',
		createdAt: '2022-11-26T16:43:02.095Z',
		updatedAt: '2022-12-01T09:56:18.962Z',
		owner: {
			name: 'Valentin PAULY',
			contact: 'ces.art@outlook.fr',
			createdAt: '2022-12-01T09:53:51.644Z',
			updatedAt: '2022-12-01T09:53:33.907Z',
			instagram: 'Cesart82'
		}
	},
	{
		id: '2',
		slug: 'football',
		name: 'FC CESI Rouen',
		description: " Le FC CESI ROUEN organise des entrainements et des matchs contre d'autres écoles/universités de Rouen.",
		image: 'FC_CESI_ROUEN.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:24:56.893Z',
		owner: {
			name: 'BARBE PILLON Maxcence',
			contact: 'fccesirouen@gmail.com',
			createdAt: '2022-12-01T10:20:05.253Z',
			updatedAt: '2022-12-01T10:18:06.233Z',
			instagram: 'fccesirouen'
		}
	},
	{
		id: '3',
		slug: 'basketball',
		name: 'CESI Rouen Basketball Club',
		description: 'Le club de basket organise un entraînement hebdomadaire de basketball et participe à des compétitions inter-campus.',
		image: 'cesirouenbasketballclub.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:24:56.893Z',
		owner: {
			name: 'Hugo LEMESLE',
			contact: 'hugo.lemesle@viacesi.fr',
			createdAt: '2022-12-01T10:20:05.253Z',
			updatedAt: '2022-12-01T10:18:06.233Z',
			instagram: 'cesirouenbasket'
		}
	},
	{
		id: '4',
		slug: 'ces-highside',
		name: "CES'HighSide",
		description: '  Le club moto, fraichement créé, rassemble des passionnés par le monde de la moto. Au programme : Balade, road trip, piste, bonne humeur & conseils.',
		image: 'ceshighside.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:26:02.152Z',
		owner: {
			name: 'Clément VALLOIS',
			contact: 'clement.valois1@viacesi.fr',
			createdAt: '2022-12-01T10:11:25.464Z',
			updatedAt: '2022-12-01T10:10:59.557Z',
			instagram: null
		}
	},
	{
		id: '5',
		slug: 'jeux-cesissant',
		name: "Jeux CESI'SSANT",
		description: "Bonjour et bienvenue dans la communauté des jeux CESI'ssant ! Le club a été créé en 2018. Il regroupe les étudiants passionnés de jeux de rôle, de cartes, de société. Tu es ici chez toi, tu peux y faire (quasiment) ce que tu veux ! N'hésite pas à t'inscrire sur les nombreuses activités proposé par le club.",
		image: 'jeuxcesissant.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:30:07.639Z',
		owner: {
			name: 'Adrien MOUTON',
			contact: 'https://discord.gg/Gmgjgz7mJq ',
			createdAt: '2022-12-01T09:57:26.530Z',
			updatedAt: '2022-12-01T10:00:16.533Z',
			instagram: null
		}
	},
	{
		id: '6',
		slug: 'cesi-xtrem',
		name: "CESI'Xtrem",
		description: "  Marre d'être inactif ? C'est le moment de te joindre au CESI’XTREM et de prendre plaisir à reprendre le sport avec un esprit d'entraide, d’amusement et pour les plus chauds, un max de surpassement.  Le CESI’Xtrem est un club créé dans le but de rassembler les CESIENS de tout niveau sportif autour d’activités et de sports conviviaux et amusants, sans se ruiner !  Au programme : partenariat avec des clubs d'escalades, du parcours, du trampoline park et plein d’évolution pour vous faire rêver. Restez à l'affut sur notre insta.",
		image: 'cesixtrem.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:23:16.538Z',
		owner: {
			name: 'Ianis DRARDJA',
			contact: 'ianis.drardja@hotmail.com',
			createdAt: '2022-12-01T10:22:56.965Z',
			updatedAt: '2022-12-01T10:22:15.354Z',
			instagram: 'cesixtrem'
		}
	},
	{
		id: '7',
		slug: 'robotique',
		name: 'Club Robotique',
		description: "Le Club Robotique, en deux phrases c'est :  Créer/construire des robots pour le kiff et pour développer nos compétences.  Pas de niveau minimum requis, on est la pour la progression et l'entraide.",
		image: 'clubrobotique.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:29:00.213Z',
		owner: {
			name: 'Erwan MARTIN',
			contact: 'erwan.martin@viacesi.fr',
			createdAt: '2022-12-01T10:08:39.352Z',
			updatedAt: '2022-12-01T10:08:09.925Z',
			instagram: null
		}
	},
	{
		id: '8',
		slug: 'handball',
		name: 'CESI Rouen Handball',
		description: 'Le club a été créé en 2020 et propose aux étudiants intéressés de participer au championnat universitaire, à des matchs amicaux et à des entrainements.',
		image: 'cesirouenhandball.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:24:56.893Z',
		owner: {
			name: 'Antoine FOURCIN',
			contact: 'antoine.fourcin@viacesi.fr',
			createdAt: '2022-12-01T10:17:41.719Z',
			updatedAt: '2022-12-01T10:15:36.286Z',
			instagram: 'cesi_rouen_handball'
		}
	},
	{
		id: '9',
		slug: 'lions-games-studio',
		name: 'Lions Games Studio',
		description: '  Le club Lions Games studio a été créé en 2019. Le club a pour ambition d’être un studio de jeux vidéo. Il rassemble les passionnés autour d’un même but qui est la création de contenu.',
		image: 'lionsgamesstudio.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:30:18.248Z',
		owner: {
			name: 'Leo COUTURE et Florian MAILLARD',
			contact: 'leo.couture@viacesi.fr,florian.maillard@viacesi.fr',
			createdAt: '2022-12-01T09:56:58.603Z',
			updatedAt: '2022-12-01T09:56:22.099Z',
			instagram: null
		}
	},
	{
		id: '10',
		slug: 'cezik',
		name: "Cezik'",
		description: '  Le club musique a été créé en 2020. Le groupe propose des concerts aux fans de musique.',
		image: 'cezik.png',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:29:56.529Z',
		owner: {
			name: 'Paul BREON',
			contact: 'paul.breon@viacesi.fr',
			createdAt: '2022-12-01T10:00:39.280Z',
			updatedAt: '2022-12-01T10:03:13.087Z',
			instagram: 'cesik_music'
		}
	},
	{
		id: '11',
		slug: 'boules',
		name: "CESI Boules",
		description: 'Ce club permet de rassembler les Césiens fan de pétanque au travers de rassemblements sportifs.',
		image: 'cesiboules.jpg',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:29:56.529Z',
		owner: {
			name: 'Matteo RENAULT',
			contact: 'matteo.renault@viacesi.fr',
			createdAt: '2022-12-01T10:00:39.280Z',
			updatedAt: '2022-12-01T10:03:13.087Z',
			instagram: 'cesiboules'
		}
	},
	{
		id: '12',
		slug: 'tarot',
		name: "CES'ATOUTS",
		description: 'Le club de tarot cherche à initier la pratique du tarot aux différents étudiants du CESI',
		image: 'cesatouts.jpg',
		createdAt: '2022-11-30T15:48:58.963Z',
		updatedAt: '2022-12-01T10:29:56.529Z',
		owner: {
			name: 'Dorian CHESNAIS',
			contact: 'dorian.chesnais@viacesi.fr',
			createdAt: '2022-12-01T10:00:39.280Z',
			updatedAt: '2022-12-01T10:03:13.087Z',
			instagram: 'ces.atouts'
		}
	}
]

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
