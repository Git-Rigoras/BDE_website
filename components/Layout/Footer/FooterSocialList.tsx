import FooterSocial from "components/Layout/Footer/FooterSocial";

import { footer } from "config";

type Props = {
  className: string;
};

const FooterSocialList = (props: Props) => {
  const { socials } = footer;

  const { className } = props;
  return (
    <div className={className}>
      {socials.map(social => (
        <FooterSocial
          key={`footer-social-${social.title}`}
          social={social}
        />
      ))}
    </div>
  );
};

export default FooterSocialList;
