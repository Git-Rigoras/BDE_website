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
      href: "/evenements",
      title: "Événements",
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
      href: "/boutique",
      title: "Boutique",
    },
  ],
};

export const footer = {
  links: <Array<Link>>[
    {
      href: "/a-propos",
      title: "À propos",
    },
    {
      href: "/contact",
      title: "Nous contacter",
    },
  ],
  socials: <Array<Social>>[
    {
      href: "https://instagram.com/",
      title: "Instagram",
      icon: faInstagram,
    },
    {
      href: "https://tiktok.com/",
      title: "TikTok",
      icon: faTiktok,
    },
    {
      href: "https://discord.com/",
      title: "Discord",
      icon: faDiscord,
    },
  ],
};

export const auth = {
  account: "/compte",
  login: "/login",
};

export const legal = {
  copyright: "Copyright © 2022 - Tous droits réservés",
};

export type Link = {
  href: string;
  title: string;
};

export type Social = {
  href: string;
  title: string;
  icon: IconDefinition;
};
