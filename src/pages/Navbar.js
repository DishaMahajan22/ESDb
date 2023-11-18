import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/logo.png"
const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="shadow">
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
          <Nav className="ml-auto">
            <Nav.Link href="#/">Search</Nav.Link>
            <Nav.Link href="#/insert">Insert</Nav.Link>
            <Nav.Link href="#/delete">Delete</Nav.Link>
            <Nav.Link href="#/update">Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default CustomNavbar;