import Head from "next/head";
import { Container } from "react-bootstrap";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Next App</title>
        <meta charSet="UTF-8" />
      </Head>
      <header>
        <NavbarMenu />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
