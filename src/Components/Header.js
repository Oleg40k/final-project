import React, { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import logo from '../assets/modlogo.svg';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
          <Container fluid>
            <NavbarBrand href="/">
              <img
                src = { logo }
                height = '50'
                width = '60'
                className = 'd-inline-block align-center'
                alt = 'logo'
              /> Департамент юридичного забезпечення МОУ</NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className = 'mr-auto'></Nav>
              <Nav>
                <Nav.Link href='/aboutSite'>Про сайт</Nav.Link>
                <Nav.Link href='/imageGallery'>Галерея картинок</Nav.Link>
                <Nav.Link href='/news'>Новини</Nav.Link>
                <Nav.Link href='/contacts'>Контакти</Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
