import Navbar from "components/Layout/Navbar/Navbar";
import Footer from "components/Layout/Footer/Footer";

import "styles/globals.css";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  const { children } = props;

  return (
    <html>
      <head></head>
      <body>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
