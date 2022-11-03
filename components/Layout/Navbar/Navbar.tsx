import { navbar } from "config";

import NavbarLink from "components/Layout/Navbar/NavbarLink";

const Navbar = () => {
  const { links } = navbar;

  return (
    <nav className="grid place-items-center">
      <ul>
        {links.map((link) => (
          <NavbarLink link={link} key={`nav-link-${link.href}`} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
