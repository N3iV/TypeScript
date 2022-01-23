import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link href="/" passHref>
          <Navbar.Brand>My next app</Navbar.Brand>
        </Link>
        <Nav>
          <Link href="/post" passHref>
            <Nav.Link>Posts</Nav.Link>
          </Link>
          <Link href="/jokes/random" passHref>
            <Nav.Link>Jokes</Nav.Link>
          </Link>
          <Link href="/books" passHref>
            <Nav.Link>Books</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
