"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import type { Link as NavLink } from "config";

type Props = {
  link: NavLink;
  index: number;
};

const NavbarLink = (props: Props) => {
  const { link, index } = props;

  return (
    <motion.li
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ delay: 0.1 * index }}
      className="flex items-stretch font-semibold uppercase hover:bg-slate-200 active:bg-slate-400 transition-colors"
    >
      <Link
        href={link.href}
        className="p-4"
      >
        {link.title}
      </Link>
    </motion.li>
  );
};

export default NavbarLink;
