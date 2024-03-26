import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">
            <Image
              src="https://eduwork.id/assets/favicon.png"
              alt="logo eduwork"
              width="140"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" className="nav-link">
                Home
              </Link>
              <Link to="/portal-berita-cc" className="nav-link">
                Portal Berita CC
              </Link>
              <Link to="/portal-berita-fc" className="nav-link">
                Portal Berita FC
              </Link>
              <Link to="/redux" className="nav-link">
                Redux
              </Link>
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
          <Link
            to="/sign-up"
            className="btn btn-primary rounded-pill fs-8 text-bold"
            type="submit"
          >
            Sign up
          </Link>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarComponent;
