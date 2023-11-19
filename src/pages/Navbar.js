import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/logo.png";

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="200"
              height="auto"
              className="d-inline-block align-top"
              alt="EsdB logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#/">Search</Nav.Link>
              <Nav.Link href="#/Insert">Insert</Nav.Link>
              <Nav.Link href="#/Update">Update</Nav.Link>
              <Nav.Link href="#/Delete">Delete</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
