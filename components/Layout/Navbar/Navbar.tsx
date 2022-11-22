import NavbarLinkList from "components/Layout/Navbar/NavbarLinkList";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center shadow-lg">
			<NavbarLinkList />
		</nav>
	);
};

export default Navbar;
