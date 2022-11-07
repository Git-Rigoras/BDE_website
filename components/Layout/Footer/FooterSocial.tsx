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
    >
      <FontAwesomeIcon
        icon={social.icon}
        fixedWidth
        className="text-xl"
      />
    </a>
  );
};

export default FooterSocial;
