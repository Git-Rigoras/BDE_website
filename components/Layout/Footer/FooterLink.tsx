import Link from "next/link";

import type { Link as FooterNextLink } from "config";

type Props = {
  link: FooterNextLink;
};

const FooterLink = (props: Props) => {
  const { link } = props;

  return (
    <Link
      href={link.href}
      className="link link-hover"
    >
      {link.title}
    </Link>
  );
};

export default FooterLink;
