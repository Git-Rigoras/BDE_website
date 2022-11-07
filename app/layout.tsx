import { config } from "@fortawesome/fontawesome-svg-core";
import { headers } from "next/headers";

import Navbar from "components/Layout/Navbar/Navbar";
import Footer from "components/Layout/Footer/Footer";

import { getSession } from "lib/session";
import SessionProvider from "contexts/SessionProvider";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/globals.css";

config.autoAddCss = false;

type Props = {
  children: React.ReactNode;
};

const RootLayout = async (props: Props) => {
  const { children } = props;
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html data-theme="light">
      <head></head>
      <body className="min-h-screen flex flex-col">
        <SessionProvider session={session}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
