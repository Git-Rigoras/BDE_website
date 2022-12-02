import type { NextPage } from "next";
import { useEffect } from "react";

import Hero from "components/Home/Hero";
import Objectives from "components/Home/Objectives";

import sleep from "lib/sleep";
import Title from "components/Misc/Title";

const HomePage: NextPage = () => {
	useEffect(() => {
		let observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach(async entry => {
					if (entry.isIntersecting) {
						if (
							entry.target instanceof HTMLElement &&
							entry.target.dataset.animate !== "true"
						) {
							await sleep(parseInt(entry.target.dataset.animate || ""));
						}
						entry.target.classList.remove("invisible");
						entry.target.classList.add("animate-fade-in-up");
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.2,
			}
		);

		document.querySelectorAll("[data-animate]").forEach(section => {
			observer.observe(section);
		});
	}, []);

	return (
		<>
			<Title content="Panda Colada | BDE CESI Rouen" />
			<div className="flex flex-col">
				<Hero />
				<Objectives />
			</div>
		</>
	);
};

export default HomePage;
