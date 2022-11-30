import { Head, Html, Main, NextScript } from "next/document";

import Navbar from "components/Layout/Navbar/Navbar";
import Footer from "components/Layout/Footer/Footer";

const Document = () => {
	return (
		<Html>
			<Head />
			<body data-theme="light">
				<div className="min-h-screen flex flex-col">
					<Navbar />
					<Main />
					<Footer />
				</div>
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
