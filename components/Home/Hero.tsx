import Image from "next/image";

const Hero = () => {
	return (
		<div className="min-h-screen relative flex justify-center">
			<Image
				src="/images/logos/logo.png"
				width={320}
				height={320}
				alt="Panda Colada, le BDE du CESI Rouen"
				className="absolute bottom-16"
			/>
			<Image
				src="/images/groupe.jpg"
				width={1600}
				height={1200}
				alt="L'équipe de Panda Colada"
				className="h-screen w-full object-cover"
			/>
		</div>
	);
};

export default Hero;
