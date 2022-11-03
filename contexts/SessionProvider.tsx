"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

const ClientSessionProvider = (props: SessionProviderProps) => {
	return <SessionProvider {...props} />;
};

export default ClientSessionProvider;
