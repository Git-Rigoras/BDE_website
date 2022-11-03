"use client";

import { motion } from "framer-motion";

import type { NavLink } from "config";
import Link from "next/link";

type Props = {
  link: NavLink;
};

const NavbarLink = (props: Props) => {
  const { link } = props;

  return (
    <motion.li initial={{ translateY: -100 }} animate={{ translateY: 0 }} className="p-4">
      <Link href={link.href}>{link.title}</Link>
    </motion.li>
  );
};

export default NavbarLink;
