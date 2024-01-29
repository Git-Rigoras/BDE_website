import { Head, Html, Main, NextScript } from "next/document";

import Navbar from "components/Layout/Navbar/Navbar";
import Footer from "components/Layout/Footer/Footer";

const Document = () => {
	return (
		<Html>
			<Head />
			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					{/* <h3 className="font-bold text-lg">Détails des réductions avec le bracelet</h3>
					<p className="py-4">
						BAB:
						<p className="mx-6">
							- Jagger Bomb : 5€ <br />
							- Pinte BAB : 5€ <br />
							- Pinte Gothic : 4€ <br />
							- Pinte Gordon Five : 5€ <br />
							- Bouteille TBK : 29€ <br />
							- Mètre TBK : 15€ <br />
							- Mètre Ricard : 18€ <br />
							- Soft au verre : 2€ <br />
							- Ice tea / coca bouteille : 2.5€ <br />
						</p>
						Antre du Malt: <br />
						<p className="mx-6">
							- Pinte blonde : 4€ <br />
							- Soft diabolo : 2.5€ <br />
						</p>
						Môme:
						<p className="mx-6">
							- 1€ de réduction sur toutes les pintes <br />
							- 0.5€ de réduction sur les softs <br />

						</p>
						O'Ka:
						<p className="mx-6">
							- Jagger Bomb : 4€ <br />
							- Pinte Pub : 3.90€ <br />
							- Cocktail BEE : 5€ <br />
							- soft fontaine : 3€ <br />
						</p>
					</p>
					<div className="modal-action">
						<label htmlFor="my-modal-6" className="btn">Super !</label>
					</div> */}
				</div>
			</div>
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
