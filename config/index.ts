export const navbar = {
  links: <Array<NavLink>>[
    {
      href: "/",
      title: "Accueil",
    },
  ],
};

export type NavLink = {
  href: string;
  title: string;
};
