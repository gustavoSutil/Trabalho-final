import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">Projeto integrador</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="../pages/clientes">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/outra-pagina">
                <NavLink>Outra Página</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;