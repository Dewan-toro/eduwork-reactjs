import {
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="https://eduwork.id/assets/favicon.png"
            alt="logo eduwork"
            width="140"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Learning" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Private Class
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bootcamp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Webinar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Course</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary rounded-pill" type="submit">
          Register
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
