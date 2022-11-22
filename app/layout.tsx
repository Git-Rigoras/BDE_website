import { config } from "@fortawesome/fontawesome-svg-core";

import Navbar from "components/Layout/Navbar/Navbar";
import Footer from "components/Layout/Footer/Footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/globals.css";

config.autoAddCss = false;

type Props = {
	children: React.ReactNode;
};

const RootLayout = async (props: Props) => {
	const { children } = props;

	return (
		<html data-theme="light">
			<head></head>
			<body className="min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
