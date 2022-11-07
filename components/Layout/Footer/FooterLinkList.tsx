import FooterLink from "components/Layout/Footer/FooterLink";

import { footer } from "config";

type Props = {
  className: string;
};

const FooterLinkList = (props: Props) => {
  const { links } = footer;
  const { className } = props;

  return (
    <div className={className}>
      {links.map(link => (
        <FooterLink
          key={`footer-link-${link.title}`}
          link={link}
        />
      ))}
    </div>
  );
};

export default FooterLinkList;
