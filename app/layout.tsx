import { headers } from "next/headers";

import Navbar from "components/Layout/Navbar/Navbar";
import Footer from "components/Layout/Footer/Footer";

import { getSession } from "lib/session";
import SessionProvider from "contexts/SessionProvider";

import "styles/globals.css";

type Props = {
	children: React.ReactNode;
};

const RootLayout = async (props: Props) => {
	const { children } = props;
	const session = await getSession(headers().get("cookie") ?? "");

	return (
		<html data-theme="light">
			<head></head>
			<body>
				<SessionProvider session={session}>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</SessionProvider>
			</body>
		</html>
	);
};

export default RootLayout;
