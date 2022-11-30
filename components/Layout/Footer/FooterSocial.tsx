import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Social } from "config";

type Props = {
	social: Social;
};

const FooterSocial = (props: Props) => {
	const { social } = props;

	return (
		<a
			href={social.href}
			className="p-1"
			target={"_blank"}
		>
			<FontAwesomeIcon
				icon={social.icon}
				fixedWidth
				className="text-xl hover:text-primary transition-all"
			/>
		</a>
	);
};

export default FooterSocial;
