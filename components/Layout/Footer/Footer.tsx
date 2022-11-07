import FooterLinkList from "components/Layout/Footer/FooterLinkList";
import FooterSocialList from "components/Layout/Footer/FooterSocialList";
import FooterLegal from "components/Layout/Footer/FooterLegal";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content gap-4">
      <FooterLinkList className="grid grid-flow-col gap-4" />
      <FooterSocialList className="grid grid-flow-col" />
      <FooterLegal />
    </footer>
  );
};

export default Footer;
