"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { auth } from "config";

const NavbarAccount = () => {
  const session = useSession();

  if (session.status === "unauthenticated") {
    return (
      <Link
        href={auth.login}
        className="flex items-center gap-2 px-4 hover:bg-slate-200 active:bg-slate-400 transition-colors"
      >
        <span className="uppercase font-semibold">Se connecter</span>
        <div className="my-2 h-10 w-10 rounded-full grid place-items-center">
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-indigo-500"
          />
        </div>
      </Link>
    );
  }

  if (session.status === "loading") {
    return (
      <div className="flex items-center max-w-sm animate-pulse gap-2 px-4">
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
        <div className="my-2 h-10 w-10 bg-gray-200 rounded-full"></div>
      </div>
    );
  }

  const image = session.data?.user?.image;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link
        href={auth.account}
        className="flex items-center gap-2 px-4 hover:bg-slate-200 active:bg-slate-400 transition-colors"
      >
        <p className="font-semibold">
          {session.data?.user?.name ?? "Mon compte"}
        </p>
        {!!image ? (
          <Image
            src={image}
            width={256}
            height={256}
            alt="Avatar"
            className="my-2 h-10 w-10 rounded-full"
          />
        ) : (
          <div className="my-2 h-10 w-10 bg-gray-200 rounded-full"></div>
        )}
      </Link>
    </motion.div>
  );
};

export default NavbarAccount;
