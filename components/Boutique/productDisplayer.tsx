import Image from "next/image";
import Link from "next/link";
import product1 from "/home/ubuntu/next-bde-delta/public/images/store/product1.png";

const productDisplayer = () => {
	return (
		<div className="mb-10">
			<h1 className="text-5xl text-center font-semibold underline decoration-secondary my-16 uppercase">
				Boutique
			</h1>
			
			{/* <div className="flex justify-center">
				<div className="divider w-full my-10 text-lg uppercase font-semibold text-primary">
					Places
				</div>
			</div> */}
			<div className="flex flex-wrap justify-center">
				<h1>Il n'y pas de produits en vente pour l'instant, réessayez plus tard !</h1>
				{/* <div className="card w-96 bg-base-100 shadow-xl mx-5 mt-10">
					<figure><Image src="/images/store/kohlanta.jpg" alt="kohlanta" width={350} height={200} /></figure>
					<div className="card-body">
						<h2 className="card-title text-center">Soirée KOH LANTA X BDE CESI ROUEN  </h2>
						<p>
							📍Espace 360 <br/>
							⏰ 20h <br/>
							📆le 8 juin <br/>
							💸15€ la participation, une boisson et l’équipement nécessaire <br/>
							Limité à 20 places <br/>
							Épreuves: Tir à la corde, épreuves en relais, combat de boudins, twister, puzzle géant...
						</p>
						<div className="card-actions justify-end">
							<Link href={"https://collecte.io/soiree-koh-lanta-bde-des-legendes-2751436/fr"} className="btn btn-primary">Acheter (15 €)</Link>
						</div>
					</div>
				</div> */}
				{/*<div className="card w-96 bg-base-100 shadow-xl mx-5 mt-10">
					<figure><Image src="/images/store/tombola.png" alt="tombola" width={200} height={200} /></figure>
					<div className="card-body">
						<h2 className="card-title text-center"> TOMBOLA x PANDA COLADA </h2>
						<p>
						Les prix à gagner: <br/>
							- Paddle avec accessoires 🏄🏻‍♂️ <br/>
							- Carte cadeau des parcs 100€ 🃏 <br/>
							- Ecouteur JBL Tune Flex 🎧 <br/>
							- Polaroid + recharge 📸 <br/>
						Pour participer c’est simple : <br/>
								- 1 ticket 2€ <br/>
								- 3 ticket 5€ <br/>
						Annonce des gagnants le 15/05, bonne chance !
						</p>
						<div className="card-actions justify-end">
							<Link href={"https://collecte.io/tombola-mai-2023-2737604/fr"} className="btn btn-primary">Acheter</Link>
						</div>
					</div>
				</div> */}
				{/* <div className="card w-96 bg-base-100 shadow-xl mx-5 mt-10">
					<figure><Image src="/images/store/Barathon.jpg" alt="e360" width={200} height={200} /></figure>
					<div className="card-body">
						<h2 className="card-title text-center">Bracelets BARATHON x BDE CESI ROUEN </h2>
						<p>
							📆 jeudi 23 mars
							📍Rouen centre <br />
							⏰ Début 20h <br />
							💸 Bracelet :	Donnant accès au Barathon avec les reducs, et à l’after <br />

							📌Boîte à Bière: 20h00-21h00 <br />

							📌L’Antre du Malt: 21h00-22h00 <br />

							📌Môme: 22h00-23h00 <br />

							📌O’Ka: 23h00-00h00 <br />

							📌After : BOOMRANG/BOHO <br />
						</p>
						<div className="card-actions justify-end">
							<label htmlFor="my-modal-6" className="btn">Détails réducs'</label>
							<Link href={"https://collecte.io/barathon-2547269/fr"} className="btn btn-primary">Acheter (5 €)</Link>
						</div>
					</div>
				</div> */}
			</div>
			{/* <div className="flex justify-center">
				<div className="divider w-full my-10 text-lg uppercase font-semibold text-primary">
					Vêtements
				</div>
			</div>
			<div className="flex flex-wrap justify-center">
				<div className="card w-96 bg-base-100 shadow-xl mx-5 mt-10">
					<figure><Image src="/images/store/product1.jpg" alt="Sweat à capuche" width={200} height={200} /></figure>
					<div className="card-body">
						<h2 className="card-title">Sweat à capuche</h2>
						<p>Sweat avec capuche, couleur vert bouteille brodé sur le cœur et sur le dos</p>
						<div className="card-actions justify-end">
							<Link href={"https://collecte.io/sweat-bde-cesi-rouen/fr"} className="btn btn-primary">Acheter (40 €)</Link>
						</div>
					</div>
				</div>
				<div className="card w-96 bg-base-100 shadow-xl mx-5 mt-10">
					<figure><Image src="/images/store/product1.jpg" alt="Sweat à capuche perso" width={200} height={200} /></figure>
					<div className="card-body">
						<h2 className="card-title">Sweat à capuche personnalisé</h2>
						<p>Sweat avec capuche, couleur vert bouteille brodé sur le cœur et sur le dos avec personnalisation sur le cœur.</p>
						<div className="card-actions justify-end">
							<Link href={"https://collecte.io/sweat-personnalisable-bde-cesi-rouen-22-23-2398721/fr"} className="btn btn-primary">Acheter (45 €)</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap justify-center align-center">
				<div className="card w-96 bg-base-100 shadow-xl mx-5 mt-10">
					<figure><Image src="/images/store/product2.jpg" alt="Teddy" width={200} height={200} /></figure>
					<div className="card-body">
						<h2 className="card-title">Teddy</h2>
						<p>Teddy noir et blanc brodé sur le cœur et sur le dos</p>
						<div className="card-actions justify-end">
							<Link href={"https://collecte.io/teddy-bde-cesi-rouen-22-23-2394323/fr"} className="btn btn-primary">Acheter (45 €)</Link>
						</div>
					</div>
				</div><div className="card w-96 bg-base-100 shadow-xl mx-5 mt-10">
					<figure><Image src="/images/store/product2.jpg" alt="Teddy perso" width={200} height={200} /></figure>
					<div className="card-body">
						<h2 className="card-title">Teddy personnalisé</h2>
						<p>Teddy noir et blanc brodé sur le cœur et sur le dos avec personnalisation sur le cœur</p>
						<div className="card-actions justify-end">
							<Link href={"https://collecte.io/teddy-personnalise-bde-cesi-rouen-22-23-2398657/fr"} className="btn btn-primary">Acheter (50 €)</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center mt-10">
				<p>
					Guide des tailles:
				</p>
				<div className="flex justify-center my-4">
					<Image src="/images/store/Guide_des_tailles.png" alt="guide des tailles" width="500" height="500"></Image>
				</div>
				<p>Pensez à prendre une taille au dessus de celle que vous prenez habituellement</p>
				<figure>
				</figure>
			</div> */}
		</div>
	);
};

export default productDisplayer;
