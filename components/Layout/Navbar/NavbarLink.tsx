import Link from "next/link";

import type { Link as NavLink } from "config";

type Props = {
	link: NavLink;
	index: number;
};

const NavbarLink = (props: Props) => {
	const { link } = props;

	return (
		<li className="flex items-stretch font-semibold uppercase hover:bg-slate-200 active:bg-slate-400 transition-colors">
			<Link
				href={link.href}
				className="p-4"
			>
				{link.title}
			</Link>
		</li>
	);
};

export default NavbarLink;
