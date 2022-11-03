import NavbarLinkList from "components/Layout/Navbar/NavbarLinkList";
import NavbarAccount from "components/Layout/Navbar/NavbarAccount";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center shadow-lg">
			<NavbarLinkList />
			<NavbarAccount />
		</nav>
	);
};

export default Navbar;
