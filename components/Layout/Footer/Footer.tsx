import Image from "next/image";
import Link from "next/link";

import { app, footer } from "config";

const Footer = () => {
	return (
		<footer className="footer p-10 bg-base-200 text-base-content">
			<div>
				<Image
					src="/images/logos/logo.png"
					width={100}
					height={100}
					alt="Logo de Panda Colada, BDE CESI Rouen"
				/>
				<p className="font-semibold">PANDA COLADA</p>
				<p>Copyright © 2022 - Tous droits réservés</p>
			</div>
			<div>
				<span className="footer-title">À propos de nous</span>
				{footer.about.map(link => (
					<Link
						href={link.href}
						key={link.href}
						className="link link-hover decoration-secondary"
					>
						{link.title}
					</Link>
				))}
			</div>
			<div>
				<span className="footer-title">Nos réseaux</span>
				{app.socials.map(social => (
					<a
						key={social.name}
						href={social.link}
						className="link link-hover decoration-secondary"
						target={"_blank"}
						rel="noopener noreferrer"
					>
						{social.name}
					</a>
				))}
			</div>
		</footer>
	);
};

export default Footer;
