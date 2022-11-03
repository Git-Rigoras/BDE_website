import NavbarLink from "components/Layout/Navbar/NavbarLink";

import { navbar } from "config";

const NavbarLinkList = () => {
	const { links } = navbar;

	return (
		<ul className="flex">
			{links.map((link, index) => (
				<NavbarLink
					link={link}
					index={index}
					key={`nav-link-${link.href}`}
				/>
			))}
		</ul>
	);
};

export default NavbarLinkList;
