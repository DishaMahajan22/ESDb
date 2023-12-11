import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/logo.png";
import UserRoleDropdown from "./UserRoleDropdown";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="#/">
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
              <Button variant="btn btn-dark" onClick={openModal}>
                Set Role
              </Button>
            </Nav>
            <style>{`
              .navbar-nav .nav-link {
                margin-right: 10px;
              }
            `}</style>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* React Bootstrap Modal */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select User Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserRoleDropdown />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-dark" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomNavbar;
