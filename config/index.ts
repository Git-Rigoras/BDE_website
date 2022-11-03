export const navbar = {
	links: <Array<NavLink>>[
		{
			href: "/",
			title: "Accueil",
		},
		{
			href: "/about",
			title: "A propos",
		},
		{
			href: "/dashboard",
			title: "Dashboard",
		},
	],
};

export const auth = {
	account: "/compte",
};

export type NavLink = {
	href: string;
	title: string;
};
